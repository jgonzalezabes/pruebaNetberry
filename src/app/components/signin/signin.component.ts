import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {

  email:string="user@example.com";
  password:string="1234";

  constructor(private authService:AuthService, private router:Router){}

  signin(){
    if(this.authService.signin(this.email, this.password) === -1){
      return window.alert("Email o contraseña incorrectos");
    }

    this.router.navigate(["/home"]);
  }

}
