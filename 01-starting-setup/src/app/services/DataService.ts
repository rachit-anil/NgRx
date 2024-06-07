import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class DataService {
  constructor(private httpClient: HttpClient) {}

  storeCount() {
    return this.httpClient.get('http://localhost:8080/storeCount');
  }
}
