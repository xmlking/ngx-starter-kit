import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Conversation } from '../chat-message.model';

@Injectable()
export class ChatService {
  public apiBaseUrl = environment.API_BASE_URL;
  readonly entityPath = 'conversations';

  constructor(private httpClient: HttpClient) {}

  saveConversation(conversation: Conversation) {}
}
