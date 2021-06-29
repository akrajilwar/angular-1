import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthComponent } from './auth.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    AuthComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
  ]
})
export class AuthModule { }
