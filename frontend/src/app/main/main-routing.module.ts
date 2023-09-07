import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from './main.component';
import {AuthGuard} from "../core/guard/auth.guard";

const routes: Routes = [{
  path: '', component: MainComponent, children: [
    {
      path: '',
      loadChildren: () => import('./components/leaderboard/leaderboard.module').then(m => m.LeaderboardModule)
    },
    {
      path: 'matches',
      loadChildren: () => import('./components/matches/matches.module').then(m => m.MatchesModule),
      canActivate: [AuthGuard]
    },
    {
      path: 'teams',
      loadChildren: () => import('./components/teams/teams.module').then(m => m.TeamsModule),

    },
    {
      path: 'dashboard',
      loadChildren: () => import('./components/dashboard/dashboard.module').then(m => m.DashboardModule),
      canActivate: [AuthGuard]

    },
    {
      path: 'matches/details/:id',
      loadChildren: () => import('./components/details-match/details-match.module').then(m => m.DetailsMatchModule)
    },
  ]
},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {
}
