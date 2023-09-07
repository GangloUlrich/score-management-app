import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ApiCoreService} from "./core/services/api-core.service";
import localeFr from '@angular/common/locales/fr';
import {HashLocationStrategy, LocationStrategy, registerLocaleData} from "@angular/common";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AuthInterceptorInterceptor} from "./core/interceptor/auth-interceptor.interceptor";
import {AuthGuard} from "./core/guard/auth.guard";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
registerLocaleData(localeFr, 'fr');

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [
    ApiCoreService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorInterceptor,
      multi: true,
    },
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
