import { UserService } from 'src/app/services/user.service';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private jwtHelper: JwtHelperService,
    private userService: UserService
  ) {}
  // public isAuthenticated(): boolean {
  //   const token = this.userService.getID();
  //   console.log(token);
  //   // Check whether the token is expired and return
  //   // true or false
  //   return !this.jwtHelper.isTokenExpired(token!);
  // }
  autoLogin() {
    const userData: string = this.userService.getToken();

    if (!userData) {
      return;
    }
    if (this.jwtHelper.isTokenExpired(userData)) {
      this.userService.setToken(userData);
    }
  }
}
