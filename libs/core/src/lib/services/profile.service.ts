import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Profile } from '@ngx-starter-kit/models';
import { environment } from '@env/environment';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private baseUrl = environment.API_BASE_URL;
  private readonly entityPath = 'user/profile';

  constructor(private httpClient: HttpClient) {}

  getMyProfile() {
    return this.httpClient.get<Profile>(`${this.baseUrl}/${this.entityPath}/myprofile`).pipe(
      catchError(this.handleError)
    );
  }

  create(entity: Partial<Profile>) {

    // const uploadData = new FormData();
    // uploadData.append('email', this.yourForm.get('email').value);
    // uploadData.append('file', this.yourForm.get('file').value);

    return this.httpClient
      .post<Profile>(`${this.baseUrl}/${this.entityPath}`, entity, {
        reportProgress: true,
        observe: 'events',
      })
      .pipe(
        catchError(this.handleError)
      );
  }

  update(id: number | string, entity: Partial<Profile>) {
    return this.httpClient
      .patch<Profile>(`${this.baseUrl}/${this.entityPath}/${id}`, entity, {
        reportProgress: true,
        observe: 'events',
      })
      .pipe(
        catchError(this.handleError)
      );
  }

  delete(id: number | string) {
    return this.httpClient.delete(`${this.baseUrl}/${this.entityPath}/${id}`).pipe(
      catchError(this.handleError),
    );
  }

  private handleError(error: HttpErrorResponse) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage: string;
    if (typeof error === 'string') {
      errorMessage = error;
    } else {
      if (error.error instanceof ErrorEvent) {
        // A client-side or network error occurred. Handle it accordingly.
        errorMessage = `An error occurred: ${error.error.message}`;
      } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong,
        errorMessage = `Backend returned code ${error.status}, with body ${error.message}`;
      }
    }
    console.error(error);
    // return an ErrorObservable with a user-facing error message
    return throwError(errorMessage);
  }

}
