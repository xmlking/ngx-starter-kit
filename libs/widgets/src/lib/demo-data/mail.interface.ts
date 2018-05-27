import { Moment } from 'moment';

export type InboxGroup = 'primary' | 'social' | 'promotions';
export type InboxType = 'draft' | 'sent' | 'spam' | 'trash' | 'none';

export class Mail {
  id?: number | string;
  from?: {
    picture?: string;
    name?: string;
    mail?: string;
  };
  to?: {
    name?: string;
    mail?: string;
  };
  subject?: string;
  content?: string;
  when?: Moment;
  read?: boolean;
  starred?: boolean;
  labels?: {
    name: string;
    color: string;
  }[];
  group?: InboxGroup;
  type?: InboxType;
  attachments?: string[];
}
