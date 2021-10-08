import { Injectable, OnInit } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root',
})
export class GuardService implements OnInit {
  constructor(public auth: AuthService, public router: Router) {}
  // canActivate(): boolean {
  //   if (!this.auth.autoLogin()) {
  //     this.router.navigate(['login']);
  //     return false;
  //   }
  //   return true;
  // }
  ngOnInit() {
    this.auth.autoLogin();
  }
}
