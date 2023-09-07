import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from "./app.component";
import {AuthGuard} from "./Core/guard/auth.guard";

const routes: Routes = [

  {
    path: '',
    component: AppComponent
  },

  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then(m => m.RegisterModule)
  },
  {path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule)},

  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  {path: 'test', loadChildren: () => import('./test/test.module').then(m => m.TestModule)},

  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
    canActivate: [AuthGuard]

  },

  {path: 'teams', loadChildren: () => import('./teams/teams.module').then(m => m.TeamsModule),canActivate:[AuthGuard]},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
