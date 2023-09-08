import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MainModule} from "../main/main.module";


@NgModule({
  declarations: [
    LoginComponent
  ],
    imports: [
        CommonModule,
        LoginRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        MainModule
    ]
})
export class LoginModule { }
