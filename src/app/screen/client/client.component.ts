import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css'],
})
export class ClientComponent implements OnInit {
  public check: boolean = true;
  constructor(private userService: UserService, private router: Router) {}
  ngOnInit(): void {
    this.checkUser();
  }

  private checkUser(): void {
    if (!this.userService.getID()) {
      this.router.navigate(['/login']);
    }
  }
}
