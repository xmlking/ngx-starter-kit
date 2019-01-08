import { ChatMessage, Subject } from '../chat-message.model';

export interface SynthesisVoice {
  voice: SpeechSynthesisVoice;
  volume: number;
  rate: number;
  pitch: number;
}

// Actions
export class FetchConversations {
  static readonly type = '[ChatBox] FetchConversations';
}

export class CreateNewConversation {
  static readonly type = '[ChatBox] CreateNewConversation';
}

export class SwitchConversation {
  static readonly type = '[ChatBox] SwitchConversation';
  constructor(public readonly payload: { conversationId: string | number }) {}
}

export class SaveConversation {
  static readonly type = '[ChatBox] SaveConversation';
  constructor(public readonly payload: { conversationId: string }) {}
}

export class CloseConversation {
  static readonly type = '[ChatBox] CloseConversation';
  constructor(public readonly payload: { conversationId: string }) {}
}

export class AddMessage {
  static readonly type = '[ChatBox] AddMessage';
  constructor(public readonly payload: { conversationId: string | number; message: ChatMessage<string> }) {}
}

export class StartVoiceCommand {
  static readonly type = '[ChatBox] StartVoiceCommand';
}
export class SendMessage {
  static readonly type = '[ChatBox] SendMessage';
  constructor(public readonly payload: { message: string }) {}
}
export class SendTyping {
  static readonly type = '[ChatBox] Typing';
  constructor(public readonly payload: Subject) {}
}

export class MarkAsRead {
  static readonly type = '[ChatBox] MarkAsRead';
}
