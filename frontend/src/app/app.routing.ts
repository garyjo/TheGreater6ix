import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SigninComponent } from "./sign/signin.component";


const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'sign',
    component: SigninComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);
