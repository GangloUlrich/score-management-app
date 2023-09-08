import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamsRoutingModule } from './teams-routing.module';
import { TeamsComponent } from './teams.component';
import {DialogModule} from "primeng/dialog";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    TeamsComponent
  ],
  imports: [
    CommonModule,
    TeamsRoutingModule,
    DialogModule,
    ReactiveFormsModule
  ]
})
export class TeamsModule { }
