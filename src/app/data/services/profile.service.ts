import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  http = inject(HttpClient);
  constructor() {}

  getTestAccounts() {
    // return this.http.get(
    //   'https://6685d7ef83c983911b002749.mockapi.io/testAccounts/accounts'
    // );
    return this.http.get('https://jsonplaceholder.typicode.com/albums');
  }
}
