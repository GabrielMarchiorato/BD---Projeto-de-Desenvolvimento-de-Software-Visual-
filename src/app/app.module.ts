import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { SelectButtonModule } from 'primeng/selectbutton';
import { AppComponent } from './app.component';
import { LoginComponent } from './shared/login/login.component';
import { DockComponent } from './shared/dock/dock.component';
import { MovementComponent } from './components/movement/movement.component';

import { ChartModule } from 'primeng/chart';
import { AddMovementComponent } from './components/add-movement/add-movement.component';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DockComponent,
    MovementComponent,
    AddMovementComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    DynamicDialogModule,
    BrowserAnimationsModule,
    PasswordModule,
    InputTextModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    SelectButtonModule,
    ChartModule,
    DropdownModule,
    InputNumberModule
  ],
  providers: [
    ButtonModule
  ],
  bootstrap: [AppComponent],
  exports: [ButtonModule]
})
export class AppModule { }
