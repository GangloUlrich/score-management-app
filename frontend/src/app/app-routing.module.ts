import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from "./app.component";
import {AuthGuard} from "./core/guard/auth.guard";

const routes: Routes = [

  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then(m => m.RegisterModule)
  },
  {path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule)},





  { path: '', loadChildren: () => import('./main/main.module').then(m => m.MainModule) },

  {path: 'test', loadChildren: () => import('./test/test.module').then(m => m.TestModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
