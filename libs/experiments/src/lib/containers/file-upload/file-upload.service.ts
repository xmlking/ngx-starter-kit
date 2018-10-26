import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '@env/environment';

@Injectable()
export class FileUploadService {
  baseUrl = environment.DOCS_BASE_URL;
  constructor(private httpClient: HttpClient) {}

  uploadFile(file, user, tenantId) {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('tenant', tenantId);
    formData.append('user', user);
    const headers = new HttpHeaders();
    return this.httpClient.post(`${this.baseUrl}/upload`, formData, { headers, responseType: 'text' });
  }
}
