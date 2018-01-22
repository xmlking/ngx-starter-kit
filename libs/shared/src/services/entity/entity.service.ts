import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../apps/default/src/environments/environment';

export abstract class EntityService<T> {
  private baseUrl = environment.API_BASE_URL;

  readonly entityPath: string;

  constructor(protected httpClient: HttpClient) {}

  getOne(id: number) {
    return this.httpClient.get<T>(`${this.baseUrl}/${this.entityPath}/${id}`);
  }

  getAll() {
    return this.httpClient.get<T[]>(`${this.baseUrl}/${this.entityPath}`);
  }

  delete(id: number) {
    return this.httpClient.delete(`${this.baseUrl}/${this.entityPath}/${id}`);
  }

  post(entity: T) {
    console.log(entity);
    return this.httpClient.post(`${this.baseUrl}/${this.entityPath}`, entity);
  }

  put(entity: T) {
    return this.httpClient.put(`${this.baseUrl}/${this.entityPath}`, entity);
  }
}
