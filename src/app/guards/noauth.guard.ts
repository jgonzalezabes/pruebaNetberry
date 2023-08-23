import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class NoauthGuard implements CanActivate {

  constructor(private authService:AuthService, private router:Router){}

  canActivate():boolean{
    if(!this.authService.loggedIn()){
      return true
    }

    this.router.navigate(['/home']);
    return false
  }
  
}
