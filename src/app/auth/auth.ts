import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
  

@Injectable({
  providedIn: 'root',
})
export class Auth {
  private _http = inject(HttpClient);
  private _storage = inject(Storage);
}
