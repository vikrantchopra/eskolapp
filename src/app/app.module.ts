import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './components/employee/employee.component';

import { ShowEmployeeComponent } from './components/show-employee/show-employee.component';
import { CrudEmployeeComponent } from './components/crud-employee/crud-employee.component';

import { HorizonService } from './services/horizon.service';

import {TabViewModule, FieldsetModule, InputTextModule, ButtonModule, DataTableModule, DialogModule,RadioButtonModule } from 'primeng/primeng';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    ShowEmployeeComponent,
    CrudEmployeeComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    TabViewModule,
    FieldsetModule,
    InputTextModule,
    ButtonModule,
    DataTableModule,
    DialogModule,
    RadioButtonModule
  ],
  providers: [HorizonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
