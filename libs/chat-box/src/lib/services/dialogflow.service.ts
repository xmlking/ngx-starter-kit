import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { environment } from '@env/environment';
import { Dialogflow } from './dialogflow';

// TODO: https://github.com/innFactory/react-native-dialogflow/blob/master/js/Dialogflow_V2.js

@Injectable({
  providedIn: 'root',
})
export class DialogflowService {
  private baseURL = environment.dialogFlow.baseUrl;
  private token: string = environment.dialogFlow.apiToken;
  private sessionId =
    '_' +
    Math.random()
      .toString(36)
      .substr(2, 9);

  constructor(private http: HttpClient) {}

  public getResponse(query: string): Observable<Dialogflow> {
    const data = {
      query,
      lang: 'en',
      sessionId: this.sessionId,
    };
    return this.http.post<Dialogflow>(`${this.baseURL}`, data, {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.token}`,
      }),
    });
  }
}
