import {
  Action,
  Actions,
  createSelector,
  NgxsOnInit,
  ofActionDispatched,
  Selector,
  State,
  StateContext,
  Store,
} from '@ngxs/store';
import { produce } from '@ngxs-labs/immer-adapter';
import { produce as produceOri } from 'immer';
import { NlpService } from '../services/nlp.service';
import { ChatService } from '../services/chat.service';
import { TextToSpeechService } from '../services/text-to-speech.service';
import { SpeechToTextService } from '../services/speech-to-text.service';

import { tap } from 'rxjs/operators';
import { ChatMessage, Conversation, ModeType, SubjectType } from '../chat-message.model';
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
  selectedConversation: Conversation; // TODO change to activeConversationId
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

@State<ChatBoxStateModel>({
  name: 'chatbox',
  defaults: {
    conversations: [],
    selectedConversation: null,
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
export class ChatBoxState implements NgxsOnInit {
  constructor(
    private nlp: NlpService,
    private stt: SpeechToTextService,
    private tts: TextToSpeechService,
    private chat: ChatService,
    private store: Store,
    private actions$: Actions,
  ) {
    this.actions$.pipe(ofActionDispatched(AddMessage)).subscribe((action: AddMessage) => {
      switch (action.payload.message.to.type) {
        case SubjectType.BOT:
          return this.nlp.process(action.payload.message.content).then(speech => {
            store.dispatch(
              new AddMessage({
                conversationId: action.payload.conversationId,
                message: ChatMessage.fromBotMessage(speech),
              }),
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
  static getSelectedConversation(state: ChatBoxStateModel) {
    return state.selectedConversation;
  }

  @Selector()
  static getConversationById(id: string) {
    return createSelector(
      [ChatBoxState],
      (state: ChatBoxStateModel) => {
        return state.conversations.find(con => con.id === id);
      },
    );
  }

  @Selector()
  static getVoices(state: ChatBoxStateModel) {
    return state.voices;
  }

  @Selector()
  static getVoicePreference(state: ChatBoxStateModel) {
    return state.voiceForm.model;
  }

  async ngxsOnInit({ getState, setState, patchState, dispatch }: StateContext<ChatBoxStateModel>) {
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
  fetchConversations({ getState, patchState, setState }: StateContext<ChatBoxStateModel>) {
    console.log('fetching open conversations');
    // return this.chat.fetchInFlightConversations().pipe(tap(res => patchState({ conversations: res })));
  }

  @Action(CreateNewConversation)
  createConversation(ctx: StateContext<ChatBoxStateModel>) {
    const newConversation = new Conversation('payload.conversationId'); // TODO create with UUID. from server?
    produce(ctx, (draft: ChatBoxStateModel) => {
      draft.conversations.push(newConversation);
      draft.selectedConversation = newConversation;
    });
  }

  @Action(SwitchConversation)
  switchConversation(
    { getState, patchState, setState }: StateContext<ChatBoxStateModel>,
    { payload }: SwitchConversation,
  ) {
    const switchedConversation = getState().conversations.find(con => con.id === payload.conversationId);
    if (switchedConversation) {
      patchState({
        selectedConversation: switchedConversation,
      });
    }
  }

  @Action(SaveConversation)
  saveConversation({ getState, patchState, setState }: StateContext<ChatBoxStateModel>, { payload }: SaveConversation) {
    console.log(`saving conversation ${payload.conversationId}`);
    // const conversation = getState().conversations.find( con => con.id === payload.conversationId);
    // return this.chat.saveConversation(conversation);
  }

  @Action(CloseConversation)
  closeConversation(ctx: StateContext<ChatBoxStateModel>, { payload }: CloseConversation) {
    console.log(`close conversation ${payload.conversationId}`);
    const closingConversation = ctx.getState().conversations.find(con => con.id === payload.conversationId);
    ctx.dispatch(new SaveConversation({ conversationId: payload.conversationId })).pipe(
      tap(_ => {
        produce(ctx, (draft: ChatBoxStateModel) => {
          draft.conversations.splice(draft.conversations.findIndex(con => con.id === payload.conversationId), 1);
          draft.selectedConversation = draft.conversations[draft.conversations.length - 1];
        });
      }),
    );
  }

  @Action(AddMessage, { cancelUncompleted: true })
  addMessage(ctx: StateContext<ChatBoxStateModel>, { payload }: AddMessage) {
    produce(ctx, (draft: ChatBoxStateModel) => {
      // draft.conversations[draft.conversations.findIndex(con => con.id === payload.conversationId)].messages.push(
      //   payload.message,
      // );
      const convIdx = draft.conversations.findIndex(con => con.id === payload.conversationId);
      const conv = draft.conversations[convIdx];
      draft.conversations[convIdx] = new Conversation(conv.id, [...conv.messages, payload.message]);
      draft.selectedConversation = draft.conversations[convIdx];
    });
  }

  @Action(SendMessage, { cancelUncompleted: true })
  async sendMessage(
    { getState, patchState, setState, dispatch }: StateContext<ChatBoxStateModel>,
    { payload }: SendMessage,
  ) {
    dispatch(
      new AddMessage({
        conversationId: getState().selectedConversation.id,
        message: ChatMessage.fromUserMessage(payload.message, ModeType.TYPE),
      }),
    );
  }

  @Action(StartVoiceCommand, { cancelUncompleted: true })
  async startVoiceCommand({ getState, patchState, setState, dispatch }: StateContext<ChatBoxStateModel>) {
    const message = await this.stt.getVoiceMessage();
    dispatch(
      new AddMessage({
        conversationId: getState().selectedConversation.id,
        message: ChatMessage.fromUserMessage(message, ModeType.SPEAK),
      }),
    );
  }
}
