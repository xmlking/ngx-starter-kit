export class Parameters {}

export class Metadata {
  intentId: string;
  webhookUsed: string;
  webhookForSlotFillingUsed: string;
  isFallbackIntent: string;
  webhookResponseTime: number;
  intentName: string;
}

export class Message {
  type: number;
  speech: string;
}

export class Fulfillment {
  speech: string;
  source: string;
  messages: Message[];
}

export class Result {
  source: string;
  resolvedQuery: string;
  action: string;
  actionIncomplete: boolean;
  parameters: Parameters;
  contexts: any[];
  metadata: Metadata;
  fulfillment: Fulfillment;
  score: number;
}

export class Status {
  code: number;
  errorType: string;
}

export class Dialogflow {
  id: string;
  timestamp: Date;
  lang: string;
  result: Result;
  status: Status;
  sessionId: string;
}
