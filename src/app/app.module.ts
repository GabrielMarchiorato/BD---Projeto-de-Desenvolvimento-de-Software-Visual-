import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { BalanceComponent } from './pages/balance/balance.component';
import { DataentryComponent } from './pages/dataentry/dataentry.component';
import { RegisterComponent } from './pages/register/register.component';
import { DockComponent } from './shared/dock/dock.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    BalanceComponent,
    DataentryComponent,
    DockComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
