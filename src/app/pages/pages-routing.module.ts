import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PagesComponent } from './pages.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
  },
  { path: 'home', component: HomeComponent },
  {
    path: 'admin', component: AdminComponent, children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'users', component: UsersComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
