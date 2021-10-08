import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css'],
})
export class ClientComponent implements OnInit {
  public check: boolean = true;
  constructor(
    private userService: UserService,
    private router: Router
  ) // private auth: AuthService
  {}
  ngOnInit(): void {
    this.checkUser();
  }

  private checkUser(): void {
    if (!this.userService.getID()) {
      this.router.navigate(['/login']);
    }
  }
  // canActivate(): boolean {
  //   if (!this.auth.isAuthenticated()) {
  //     this.router.navigate(['login']);
  //     return false;
  //   }
  //   return true;
  // }
}
