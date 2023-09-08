import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsMatchRoutingModule } from './details-match-routing.module';
import { DetailsMatchComponent } from './details-match.component';
import {DialogModule} from "primeng/dialog";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    DetailsMatchComponent
  ],
    imports: [
        CommonModule,
        DetailsMatchRoutingModule,
        DialogModule,
        ReactiveFormsModule
    ]
})
export class DetailsMatchModule { }
