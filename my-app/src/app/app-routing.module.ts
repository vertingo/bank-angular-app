import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import{ LoginComponent } from './login/login.component';
import{ RegisterComponent } from './register/register.component';
import{ HomeComponent } from './home/home.component';
import{VirementComponent}from './virement/virement.component';
import{RetraitComponent}from './retrait/retrait.component';

const appRoutes: Routes = [
  { 
    path: 'login', 
    component: LoginComponent
  },
  { 
    path: 'register', 
    component: RegisterComponent
  },
  { 
    path: 'home', 
    component: HomeComponent
  }
  ,
  { 
    path: 'virement', 
    component: VirementComponent
  }
  ,
  { 
    path: 'retrait', 
    component: RetraitComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
