import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private authService:AuthService, private router:Router){}

  signOut(){
    this.authService.signOut();
    this.router.navigate(["/signin"]);
  }
}
