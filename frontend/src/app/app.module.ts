import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { appRouting } from './app.routing';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuard } from './shared/guards/auth-guard.service';
import { CanDeactivateGuard } from './shared/guards/can-deactivate-guard.service';
import { SigninComponent } from './sign/signin.component';
import {HttpModule, Http} from "@angular/http";
import {TranslateModule, TranslateLoader, TranslateStaticLoader, TranslateService} from "ng2-translate";
import {HomeModule} from "./home/home.module";
export function createTranslateLoader(http: Http) {
  return new TranslateStaticLoader(http, './assets/i18n', '.json');
}

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    appRouting,
    HomeModule,

    HttpModule,
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [Http]
    })
  ],
  declarations: [
    AppComponent,
    ContactComponent,
    NotFoundComponent,
    SigninComponent,
    ContactComponent,
  ],
  providers: [
    AuthGuard,
    CanDeactivateGuard
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  param = {value: 'world'};

  constructor(translate: TranslateService) {
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('en');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('fr');
  }
}
