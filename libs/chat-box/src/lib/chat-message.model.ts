export enum SubjectType {
  BOT,
  USER,
  ADMIN,
  GROUP,
  ALL,
}

export enum DirectionType {
  INCOMING,
  OUTGOING,
}

export enum ModeType {
  SPEAK,
  TYPE,
}
export class Subject {
  public readonly type: SubjectType;
  public readonly who?: string; // | User with AvatarUrl?
  constructor(type: SubjectType, who?: string) {
    this.type = type;
    if (who) {
      this.who = who;
    }
  }
}

export abstract class UiAction {
  // abstract get id(): number | string;
  // type: choice | card | button | yesNo ?
  [key: string]: any;
  abstract render(): string;
  constructor(init?: Partial<UiAction>) {
    Object.assign(this, init);
  }
}

export class ChatMessage<T extends UiAction | string> {
  public readonly direction: DirectionType;
  public readonly from?: Subject;
  public readonly to?: Subject;
  public readonly content: T;
  public readonly timestamp: Date;
  public readonly isRead: boolean;
  public readonly mode?: ModeType;

  constructor(init?: Partial<ChatMessage<T>>) {
    Object.assign(this, init);
  }

  static fromBotMessage(content: string) {
    return new ChatMessage({
      direction: DirectionType.INCOMING,
      from: new Subject(SubjectType.BOT),
      to: new Subject(SubjectType.USER),
      content: content,
      timestamp: new Date(),
      isRead: false,
    });
  }

  static fromUserMessage(content: string, mode: ModeType) {
    return new ChatMessage({
      direction: DirectionType.OUTGOING,
      from: new Subject(SubjectType.USER),
      to: new Subject(SubjectType.BOT),
      content: content,
      timestamp: new Date(),
      isRead: true,
      mode: mode,
    });
  }

  public get isIncoming(): boolean {
    return this.direction === DirectionType.INCOMING;
  }

  public get isOutgoing(): boolean {
    return this.direction === DirectionType.OUTGOING;
  }

  public render(): string {
    if (this.content instanceof UiAction) {
      return this.content.render();
    } else {
      return this.content as string; // FIXME
    }
  }
}

export class Conversation {
  public id: string; // It could be generated string or room name.
  messages: ChatMessage<any>[];
  constructor(id: string, messages: ChatMessage<any>[] = []) {
    this.id = id;
    this.messages = messages;
  }
}
