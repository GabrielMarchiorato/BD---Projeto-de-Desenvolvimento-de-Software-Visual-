import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from '../content/login/login.component';
import { RegisterComponent } from '../content/register/register.component';
import { BalanceComponent } from '../content/balance/balance.component';
import { DataentryComponent } from '../content/dataentry/dataentry.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    BalanceComponent,
    DataentryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
