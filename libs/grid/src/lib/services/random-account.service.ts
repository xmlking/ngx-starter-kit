import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

// generated using https://transform.now.sh/json-to-ts-interface/
export interface ResponseObject {
  results?: (RandomAccount)[] | null;
  info: Info;
}

export interface Info {
  seed: string;
  results: number;
  page: number;
  version: string;
}

export interface RandomAccount {
  gender: string;
  name: Name;
  location: Location;
  email: string;
  dob: Dob;
  phone: string;
  cell: string;
  id: Id;
  picture: Picture;
  nat: string;
}

export interface Name {
  title: string;
  first: string;
  last: string;
}

export interface Location {
  street: string;
  city: string;
  state: string;
  postcode: number;
  coordinates: Coordinates;
  timezone: Timezone;
}

export interface Coordinates {
  latitude: string;
  longitude: string;
}

export interface Timezone {
  offset: string;
  description: string;
}

export interface Dob {
  date: string;
  age: number;
}

export interface Id {
  name: string;
  value: string;
}

export interface Picture {
  large: string;
  medium: string;
  thumbnail: string;
}

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class RandomAccountService {
  // public url = 'https://randomuser.me/api/?nat=us&results=100&exc=login,registered&seed=sumo';
  public baseUrl = 'https://randomuser.me/api/';
  params = new HttpParams()
    .append('seed', 'sumo')
    .append('nat', 'us')
    .append('exc', 'login,registered');

  constructor(private httpClient: HttpClient) {}

  getAll(pageSize: number = 100) {
    const params = this.params.append('results', '' + pageSize);
    return this.httpClient
      .get<ResponseObject>(this.baseUrl, { params })
      .pipe(map((response: ResponseObject) => response.results));
  }

  getById(id: string) {
    const params = this.params.append('id', id).append('results', '1');
    return this.httpClient
      .get<ResponseObject>(this.baseUrl, { params })
      .pipe(map((response: ResponseObject) => response.results[0]));
  }
}
