import { Injectable } from '@angular/core';
import { ImmutableContext } from '@ngxs-labs/immer-adapter';
import {
  Action,
  Actions,
  createSelector,
  NgxsAfterBootstrap,
  ofActionDispatched,
  Selector,
  State,
  StateContext,
  Store,
} from '@ngxs/store';
import { tap } from 'rxjs/operators';
import { ChatMessage, Conversation, ModeType, SubjectType } from '../chat-message.model';
import { ChatService } from '../services/chat.service';
import { NlpService } from '../services/nlp.service';
import { SpeechToTextService } from '../services/speech-to-text.service';
import { TextToSpeechService } from '../services/text-to-speech.service';
import {
  AddMessage,
  CloseConversation,
  CreateNewConversation,
  FetchConversations,
  SaveConversation,
  SendMessage,
  StartVoiceCommand,
  SwitchConversation,
  SynthesisVoice,
} from './chat-box.actions';

export class ChatBoxStateModel {
  conversations: Conversation[];
  activeConversationId: string | number;
  canUseSpeechRecognition: boolean;
  canUseSpeechSynthesis: boolean;
  voices: SpeechSynthesisVoice[];
  voiceForm: {
    model: SynthesisVoice;
    dirty: boolean;
    status: string;
    errors: any;
  };
  activeUsersBots: any[];
  loading: boolean;
}

/** @dynamic */
@State<ChatBoxStateModel>({
  name: 'chatbox',
  defaults: {
    conversations: [],
    activeConversationId: null,
    canUseSpeechRecognition: false,
    canUseSpeechSynthesis: false,
    voices: [],
    voiceForm: {
      model: {
        voice: null,
        volume: 1, // 0 to 1
        rate: 1, // 0.1 to 10
        pitch: 1, // 0 to 2
      },
      dirty: false,
      status: 'VALID',
      errors: {},
    },
    activeUsersBots: [],
    loading: false,
  },
})
@Injectable({
  providedIn: 'root',
})
export class ChatBoxState implements NgxsAfterBootstrap {
  constructor(
    private nlp: NlpService,
    private stt: SpeechToTextService,
    private tts: TextToSpeechService,
    private chat: ChatService,
    private store: Store,
    private actions$: Actions
  ) {
    this.actions$.pipe(ofActionDispatched(AddMessage)).subscribe((action: AddMessage) => {
      switch (action.payload.message.to.type) {
        case SubjectType.BOT:
          return this.nlp.process(action.payload.message.content).then((speech) => {
            store.dispatch(
              new AddMessage({
                conversationId: action.payload.conversationId,
                message: ChatMessage.fromBotMessage(speech),
              })
            );
            if (action.payload.message.mode === ModeType.SPEAK) {
              this.tts.synthesisVoice(speech, this.store.selectSnapshot(ChatBoxState.getVoicePreference));
            }
          });
        case SubjectType.USER:
        case SubjectType.ADMIN:
        case SubjectType.GROUP:
        case SubjectType.ALL:
          break;
        default:
          break;
      }
    });
  }

  @Selector()
  public static canUseSpeechRecognition(state: ChatBoxStateModel) {
    return state.canUseSpeechRecognition;
  }

  @Selector()
  public static canUseSpeechSynthesis(state: ChatBoxStateModel) {
    return state.canUseSpeechSynthesis;
  }

  @Selector()
  public static loading(state: ChatBoxStateModel) {
    return state.loading;
  }

  @Selector()
  static getConversations(state: ChatBoxStateModel) {
    return state.conversations;
  }

  @Selector()
  static getActiveConversation(state: ChatBoxStateModel) {
    return state.conversations[state.conversations.findIndex((con) => con.id === state.activeConversationId)];
  }

  @Selector()
  static getConversationById(id: string) {
    return createSelector([ChatBoxState], (state: ChatBoxStateModel) => {
      return state.conversations.find((con) => con.id === id);
    });
  }

  @Selector()
  static getVoices(state: ChatBoxStateModel) {
    return state.voices;
  }

  @Selector()
  static getVoicePreference(state: ChatBoxStateModel) {
    return state.voiceForm.model;
  }

  async ngxsAfterBootstrap({ patchState, dispatch }: StateContext<ChatBoxStateModel>) {
    console.log('ChatBoxState initialized, setting defaults');
    if (this.tts.canUseSpeechSynthesis) {
      const voices = await this.tts.getVoiceList();
      patchState({
        canUseSpeechRecognition: this.stt.canUseSpeechRecognition,
        canUseSpeechSynthesis: this.tts.canUseSpeechSynthesis,
        voices,
        voiceForm: {
          model: {
            voice: voices[48],
            volume: 1,
            rate: 1,
            pitch: 1,
          },
          dirty: false,
          status: 'VALID',
          errors: {},
        },
      });
    }
    dispatch(new FetchConversations());
  }

  @Action(FetchConversations)
  fetchConversations(ctx: StateContext<ChatBoxStateModel>) {
    console.log('fetching open conversations');
    // return this.chat.fetchInFlightConversations().pipe(
    //   tap((res: Conversation[]) =>
    //     produce(ctx, (draft: ChatBoxStateModel) => {
    //       draft.conversations = res;
    //     }),
    //   ),
    // );
  }

  @ImmutableContext()
  @Action(CreateNewConversation)
  createConversation(ctx: StateContext<ChatBoxStateModel>) {
    const newConversation = new Conversation('payload.conversationId'); // TODO create with UUID. from server?
    ctx.setState((state: ChatBoxStateModel) => {
      state.conversations.push(newConversation);
      state.activeConversationId = newConversation.id;
      return state;
    });
  }

  @ImmutableContext()
  @Action(SwitchConversation)
  switchConversation(ctx: StateContext<ChatBoxStateModel>, { payload }: SwitchConversation) {
    const state = ctx.getState();
    const switchedConversation =
      state.conversations[state.conversations.findIndex((con) => con.id === state.activeConversationId)];
    if (switchedConversation) {
      ctx.setState((state2: ChatBoxStateModel) => {
        state2.activeConversationId = switchedConversation.id;
        return state2;
      });
    }
  }

  @Action(SaveConversation)
  saveConversation(ctx: StateContext<ChatBoxStateModel>, { payload }: SaveConversation) {
    console.log(`saving conversation ${payload.conversationId}`);
    // const conversation = ctx.getState()
    // .conversations[ctx.getState().conversations.findIndex(con => con.id === payload.conversationId)];
    // return this.chat.saveConversation(conversation);
  }

  @ImmutableContext()
  @Action(CloseConversation)
  closeConversation(ctx: StateContext<ChatBoxStateModel>, { payload }: CloseConversation) {
    console.log(`close conversation ${payload.conversationId}`);
    const closingConversation = ctx.getState().conversations.find((con) => con.id === payload.conversationId);
    ctx.dispatch(new SaveConversation({ conversationId: payload.conversationId })).pipe(
      tap((_) => {
        ctx.setState((state: ChatBoxStateModel) => {
          state.conversations.splice(
            state.conversations.findIndex((con) => con.id === payload.conversationId),
            1
          );
          state.activeConversationId = state.conversations[state.conversations.length - 1].id;
          return state;
        });
      })
    );
  }

  @ImmutableContext()
  @Action(AddMessage, { cancelUncompleted: true })
  addMessage(ctx: StateContext<ChatBoxStateModel>, { payload }: AddMessage) {
    ctx.setState((state: ChatBoxStateModel) => {
      // state.conversations[draft.conversations.findIndex(con => con.id === payload.conversationId)].messages.push(
      //   payload.message,
      // );
      const convIdx = state.conversations.findIndex((con) => con.id === payload.conversationId);
      const conv = state.conversations[convIdx];
      state.conversations[convIdx] = new Conversation(conv.id, [...conv.messages, payload.message]);
      state.activeConversationId = state.conversations[convIdx].id;
      return state;
    });
  }

  @Action(SendMessage, { cancelUncompleted: true })
  async sendMessage(ctx: StateContext<ChatBoxStateModel>, { payload }: SendMessage) {
    ctx.dispatch(
      new AddMessage({
        conversationId: ctx.getState().activeConversationId,
        message: ChatMessage.fromUserMessage(payload.message, ModeType.TYPE),
      })
    );
  }

  @Action(StartVoiceCommand, { cancelUncompleted: true })
  async startVoiceCommand(ctx: StateContext<ChatBoxStateModel>) {
    const message = await this.stt.getVoiceMessage();
    ctx.dispatch(
      new AddMessage({
        conversationId: ctx.getState().activeConversationId,
        message: ChatMessage.fromUserMessage(message, ModeType.SPEAK),
      })
    );
  }
}
