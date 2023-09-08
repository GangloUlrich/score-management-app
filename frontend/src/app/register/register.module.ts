import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MainModule} from "../main/main.module";


@NgModule({
  declarations: [
    RegisterComponent
  ],
    imports: [
        CommonModule,
        RegisterRoutingModule,
        ReactiveFormsModule,
        MainModule
    ]
})
export class RegisterModule { }
