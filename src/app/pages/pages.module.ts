import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { PagesComponent } from './pages.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UsersComponent } from './users/users.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent,
    AdminComponent,
    PagesComponent,
    NotFoundComponent,
    UsersComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PagesModule { }
