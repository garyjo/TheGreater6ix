import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRouting } from './home.routing';
import { HomeComponent } from './home.component';
import { HomeService } from '../shared/services/home.service';
import {AppModule} from "../app.module";
@NgModule({
  imports: [
    CommonModule,
    AppModule,
    HomeRouting,
  ],
  declarations: [
    HomeComponent
  ],
  providers:[
    HomeService
    ]
})
export class HomeModule {}
