import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsMatchComponent } from './details-match.component';

const routes: Routes = [{ path: '', component: DetailsMatchComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailsMatchRoutingModule { }
