import { UserService } from 'src/app/services/user.service';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private userService: UserService) {}

  public isAuthenticated(): boolean {
    const token = this.userService.getToken();
    const jwtHelper = new JwtHelperService();
    if (token === null) return false;
    return !jwtHelper.isTokenExpired(token);
  }

  static headers = new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + localStorage.getItem('token'),
  });
}
