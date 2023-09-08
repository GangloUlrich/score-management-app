import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatchesRoutingModule } from './matches-routing.module';
import { MatchesComponent } from './matches.component';
import {DialogModule} from "primeng/dialog";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    MatchesComponent
  ],
    imports: [
        CommonModule,
        MatchesRoutingModule,
        DialogModule,
        ReactiveFormsModule
    ]
})
export class MatchesModule { }
