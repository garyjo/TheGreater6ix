import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { HomeInfoComponent } from './home-info.component';

const HomeRoutes: Routes = [
  {
    path: 'pokemon',
    component: HomeComponent
  },
  {
    path: 'pokemon/:name',
    component: HomeInfoComponent
  }
];

export const HomeRouting: ModuleWithProviders = RouterModule.forChild(HomeRoutes);