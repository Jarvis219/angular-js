import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { UserModel } from '../model/user-model';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  public register(data: UserModel[]): Observable<UserModel[]> {
    const url = `${environment.api}/signup`;
    return this.http.post<UserModel[]>(url, data[0]);
  }

  public setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  public setID(id: string): void {
    localStorage.setItem('id', id);
  }

  public getToken(): string {
    return localStorage.getItem('token')!;
  }

  public getID(): string {
    return localStorage.getItem('id')!;
  }

  public getActive(): string {
    return localStorage.getItem('active')!;
  }

  public setActive(data: string): void {
    localStorage.setItem('active', data);
  }

  public verifyEmail(token: string) {
    const url = `${environment.api}/active-email?token=${token}`;
    return this.http.get<UserModel[]>(url);
  }

  public signIn(data: UserModel[]): Observable<UserModel[]> {
    const url = `${environment.api}/signin`;
    return this.http.post<UserModel[]>(url, data[0]);
  }

  public signOut(): Observable<UserModel[]> {
    localStorage.removeItem('active');
    localStorage.removeItem('id');
    localStorage.removeItem('token');
    const url = `${environment.api}/signout`;
    return this.http.get<UserModel[]>(url);
  }

  public profile(id: string): Observable<UserModel[]> {
    const url = `${environment.api}/profile/${id}`;
    return this.http.get<UserModel[]>(url);
  }

  public updateProfile(id: string, data: UserModel[]): Observable<UserModel[]> {
    const url = `${environment.api}/profile/update/${id}`;
    return this.http.put<UserModel[]>(url, data[0]);
  }

  public uniqueEmail(email: string): Observable<UserModel[]> {
    const url = `${environment.api}/profile/unique-email?email=${email}`;
    return this.http.get<UserModel[]>(url);
  }
}
