import { Action, Actions, createSelector, NgxsOnInit, ofActionDispatched, Selector, State, StateContext, Store } from '@ngxs/store';
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
  SaveConversation, SendMessage,
  StartVoiceCommand,
  SwitchConversation,
  SwitchVoice,
} from './chat-box.actions';


export class ChatBoxStateModel {
  conversations: Conversation[];
  selectedConversation: Conversation;
  canUseSpeechRecognition: boolean;
  canUseSpeechSynthesis: boolean;
  voices: SpeechSynthesisVoice[];
  selectedVoice: SpeechSynthesisVoice;
  activeUsersBots: any[];
  loading: boolean;
}

@State<ChatBoxStateModel>({
  name: 'chatbox',
  defaults: {
    conversations: [],
    selectedConversation: null,
    canUseSpeechRecognition: false,
    canUseSpeechSynthesis: false,
    voices: [],
    selectedVoice: null,
    activeUsersBots: [],
    loading: false,
  },
})
export class ChatBoxState implements NgxsOnInit {
  constructor(private nlp: NlpService,
              private stt: SpeechToTextService,
              private tts: TextToSpeechService,
              private chat: ChatService,
              private store: Store,
              private actions$: Actions) {
    this.actions$
      .pipe(ofActionDispatched(AddMessage))
      .subscribe( (action: AddMessage) => {
        console.log('ChatBoxState action.......', action);
        switch (action.payload.message.to.type) {
          case SubjectType.BOT:
            return this.nlp.process(action.payload.message.content).then(speech => {
              store.dispatch(
                new AddMessage({
                  conversationId: action.payload.conversationId,
                  message: ChatMessage.fromBotMessage(speech)
                }));
              if (action.payload.message.mode === ModeType.SPEAK) {
                this.tts.synthesisVoice(speech, this.store.selectSnapshot(ChatBoxState.getSelectedVoice));
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
    return createSelector([ChatBoxState], (state: ChatBoxStateModel) => {
      return state.conversations.find( con => con.id === id);
    });
  }

  @Selector()
  static getVoices(state: ChatBoxStateModel) {
    return state.voices;
  }

  @Selector()
  static getSelectedVoice(state: ChatBoxStateModel) {
    return state.selectedVoice;
  }

  async ngxsOnInit({ getState, setState, patchState, dispatch }: StateContext<ChatBoxStateModel>) {
    console.log('ChatBoxState initialized, setting defaults');
    let voices = [], selectedVoice;
    if (this.tts.canUseSpeechSynthesis) {
      voices = await this.tts.getVoiceList();
      selectedVoice = voices[48];
    }
    patchState({
      canUseSpeechRecognition: this.stt.canUseSpeechRecognition,
      canUseSpeechSynthesis: this.tts.canUseSpeechSynthesis,
      voices,
      selectedVoice
    });
    dispatch(new FetchConversations());
  }

  @Action(SwitchVoice)
  switchVoice({ patchState }: StateContext<ChatBoxStateModel>, { payload }: SwitchVoice) {
    patchState({
      selectedVoice: payload,
    });
  }

  @Action(FetchConversations)
  fetchConversations({ getState, patchState, setState }: StateContext<ChatBoxStateModel>) {
    console.log('fetching open conversations');
    // return this.chat.fetchInFlightConversations().pipe(tap(res => patchState({ conversations: res })));
  }

  @Action(CreateNewConversation)
  createConversation({ getState, patchState, setState }: StateContext<ChatBoxStateModel>) {
    const  newConversation = new Conversation('payload.conversationId');
    patchState({
      conversations: [...getState().conversations, newConversation],
      selectedConversation: newConversation
    });
  }

  @Action(SwitchConversation)
  switchConversation({ getState, patchState, setState }: StateContext<ChatBoxStateModel>, { payload }: SwitchConversation) {
    const  switchedConversation = getState().conversations.find( con => con.id === payload.conversationId);
    if (switchedConversation) {
      patchState({
        selectedConversation: switchedConversation
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
  closeConversation({ getState, patchState, setState, dispatch }: StateContext<ChatBoxStateModel>, { payload }: CloseConversation) {
    console.log(`close conversation ${payload.conversationId}`);
    const closingConversation = getState().conversations.find( con => con.id === payload.conversationId);
    dispatch(new SaveConversation({conversationId: payload.conversationId})).pipe(
      tap(_ => {
        const remainingCons = getState().conversations.filter(conversation => conversation.id !== payload.conversationId);
        patchState({
          conversations: remainingCons,
          selectedConversation: remainingCons[remainingCons.length - 1]
        });
      })
    );
  }

  @Action(AddMessage, { cancelUncompleted: true })
  addMessage({ getState, patchState, setState }: StateContext<ChatBoxStateModel>,  { payload }: AddMessage) {
    const conversation = getState().conversations.find( con => con.id === payload.conversationId);
    conversation.messages.push(payload.message);
    // patchState({
    //   // conversations: [...getState().conversations]
    // });
  }

  @Action(SendMessage, { cancelUncompleted: true })
  async sendMessage({ getState, patchState, setState, dispatch }: StateContext<ChatBoxStateModel>,  { payload }: SendMessage) {
    dispatch(new AddMessage({
      conversationId: getState().selectedConversation.id,
      message: ChatMessage.fromUserMessage(payload.message, ModeType.TYPE)
    }));
  }

  @Action(StartVoiceCommand, { cancelUncompleted: true })
  async startVoiceCommand({ getState, patchState, setState, dispatch }: StateContext<ChatBoxStateModel>) {
    const message = await this.stt.getVoiceMessage();
    dispatch(new AddMessage({
      conversationId: getState().selectedConversation.id,
      message: ChatMessage.fromUserMessage(message, ModeType.SPEAK)
    }));
  }
}
