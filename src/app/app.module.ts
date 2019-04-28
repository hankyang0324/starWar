import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatButtonModule, MatDialogModule, MatProgressSpinnerModule } from "@angular/material";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharacterComponent, ShowDetails } from './character/character.component';
import { ErrorComponent } from './error/error.component';
import { ErrorInterceptor } from "./error-interceptor";
import { StartComponent } from './start/start.component';

@NgModule({
  declarations: [
    AppComponent,
    CharacterComponent,
    ErrorComponent,
    StartComponent,
    ShowDetails
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    MatProgressSpinnerModule,
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }],
  bootstrap: [AppComponent],
  entryComponents: [ErrorComponent,ShowDetails]
})
export class AppModule {}
