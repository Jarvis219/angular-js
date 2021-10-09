import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FriendModel } from '../model/friend-model';

@Injectable({
  providedIn: 'root',
})
export class FriendService {
  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + localStorage.getItem('token'),
  });
  constructor(private http: HttpClient) {}

  public getFriend(): Observable<FriendModel[]> {
    const url = `${environment.api}/friend`;
    return this.http.get<FriendModel[]>(url, { headers: this.headers });
  }
  public findUser(id: String): Observable<FriendModel[]> {
    const url = `${environment.api}/friend/find-user?friend=${id}`;
    return this.http.get<FriendModel[]>(url, { headers: this.headers });
  }
}
