import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { AccountComponent } from './account/account.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuardGuard } from './auth-guard.guard';

const routes: Routes = [{path: 'login', component: LoginComponent}, 
  {path: 'account', component: AccountComponent, canActivate: [AuthGuardGuard]}, 
  {path: 'profile', component: ProfileComponent, canActivate: [AuthGuardGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
