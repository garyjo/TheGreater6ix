import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRouting } from './home.routing';
import { HomeComponent } from './home.component';
import { HomeInfoComponent } from './home-info.component';
import { HomeService } from './home.service'

@NgModule({
  imports: [
    CommonModule,
    HomeRouting
  ],
  declarations: [
    HomeComponent,
    HomeInfoComponent
  ],
  providers:[
    HomeService
    ]
})
export class HomeModule { }
