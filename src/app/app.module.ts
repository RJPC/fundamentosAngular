import { /*LOCALE_ID,*/ NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { QuicklinkModule } from "ngx-quicklink";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { NotFoundComponent } from './not-found/not-found.component';


// Config location es-Es
// import localeEs from "@angular/common/locales/es";
// import { registerLocaleData } from "@angular/common";
// registerLocaleData(localeEs, "es");

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    QuicklinkModule,
  ],
  providers: [/*{ provide: LOCALE_ID, useValue: "es" }*/ {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
