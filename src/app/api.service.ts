import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiData } from './models/I.api-data.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getAllApi() {
    return this.http.get<{count: number, entries:ApiData[]}>('https://api.publicapis.org/entries');
  }

  getApiByTitle(title: string) {
    return this.http.get<{ count: number, entries: ApiData[] }>('https://api.publicapis.org/entries', {params: {
      title
    }});
  }
}
