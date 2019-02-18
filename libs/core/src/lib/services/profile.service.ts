import { HttpClient, HttpErrorResponse, HttpEventType, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Profile } from '@ngx-starter-kit/models';
import { environment } from '@env/environment';
import { catchError, finalize, map, tap, last } from 'rxjs/operators';
import { BehaviorSubject, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private baseUrl = environment.API_BASE_URL;
  private readonly entityPath = 'user/profile';
  private loadingSubject = new BehaviorSubject<boolean>(false);
  public loading$ = this.loadingSubject.asObservable();

  public uploadProgress: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  public downloadProgress: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  constructor(private httpClient: HttpClient) {}

  getMyProfile() {
    this.loadingSubject.next(true);
    return this.httpClient.get<Profile>(`${this.baseUrl}/${this.entityPath}/myprofile`).pipe(
      catchError(this.handleError),
      finalize(() => this.loadingSubject.next(false)),
    );
  }

  create(entity: Partial<Profile>) {

    // const uploadData = new FormData();
    // uploadData.append('email', this.yourForm.get('email').value);
    // uploadData.append('file', this.yourForm.get('file').value);

    this.loadingSubject.next(true);
    return this.httpClient
      .post<Profile>(`${this.baseUrl}/${this.entityPath}`, entity, {
        reportProgress: true,
        observe: 'events',
      })
      .pipe(
        map(event => event.type),
        map(event => this.getStatusMessage(event)),
        tap(message => console.log(message)),
        last(),
        catchError(this.handleError),
        finalize(() => this.loadingSubject.next(false)),
      );
  }

  update(id: number | string, entity: Partial<Profile>) {
    this.loadingSubject.next(true);
    return this.httpClient
      .patch<Profile>(`${this.baseUrl}/${this.entityPath}/${id}`, entity, {
        reportProgress: true,
        observe: 'events',
      })
      .pipe(
        map(event => this.getStatusMessage(event)),
        tap(message => console.log(message)),
        last(),
        catchError(this.handleError),
        finalize(() => this.loadingSubject.next(false)),
      );
  }

  delete(id: number | string) {
    this.loadingSubject.next(true);
    return this.httpClient.delete(`${this.baseUrl}/${this.entityPath}/${id}`).pipe(
      catchError(this.handleError),
      finalize(() => this.loadingSubject.next(false)),
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }
    // return an ErrorObservable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }

  private getStatusMessage(event) {
    let status;

    switch (event.type) {
      case HttpEventType.Sent:
        return `Uploading Files`;

      case HttpEventType.UploadProgress:
        status = Math.round((100 * event.loaded) / event.total);
        this.uploadProgress.next(status);
        return `Files are ${status}% uploaded`;

      case HttpEventType.DownloadProgress:
        status = Math.round((100 * event.loaded) / event.total);
        this.downloadProgress.next(status); // NOTE: The Content-Length header must be set on the server to calculate this
        return `Files are ${status}% downloaded`;

      case HttpEventType.Response:
        return (event as HttpResponse<Profile>).body; // `Done`;

      default:
        return `Something went wrong`;
    }
  }
}
