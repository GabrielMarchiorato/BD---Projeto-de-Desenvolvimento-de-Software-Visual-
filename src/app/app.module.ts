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
import { InputMaskModule } from 'primeng/inputmask';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { EditMovementComponent } from './components/edit-movement/edit-movement.component';
import { AddCardComponent } from './components/add-card/add-card.component';
import { CalendarModule } from 'primeng/calendar';
import { EditCardComponent } from './components/edit-card/edit-card.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DockComponent,
    MovementComponent,
    AddMovementComponent,
    EditMovementComponent,
    AddCardComponent,
    EditCardComponent
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
    InputNumberModule,
    InputMaskModule,
    SweetAlert2Module.forRoot(),
    CalendarModule
  ],
  providers: [
    ButtonModule,
    InputNumberModule,
    InputMaskModule,
    CalendarModule
  ],
  bootstrap: [AppComponent],
  exports: [ButtonModule, InputNumberModule, InputMaskModule, CalendarModule]
})
export class AppModule { }
