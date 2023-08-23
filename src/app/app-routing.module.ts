import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { AuthGuard } from './guards/auth.guard';
import { NoauthGuard } from './guards/noauth.guard';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path:'home',
    component: HomeComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'signin',
    component: SigninComponent,
    canActivate:[NoauthGuard]
  },
  {
    path:'signup',
    component: SignupComponent,
    canActivate:[NoauthGuard]
  }
  
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
