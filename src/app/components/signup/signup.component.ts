import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  formulario = this.formBuilder.group({
    email:"",
    password:""
  })

  constructor(private authService:AuthService, private formBuilder:FormBuilder, private router:Router){}

  signup(){
    console.log(this.formulario.value);
    if(this.authService.signup(this.formulario.value.email!, this.formulario.value.password!) === -1){
      return window.alert("Email o contraseña incorrectos");
    }

    this.router.navigate(["/home"]);
  }
}
