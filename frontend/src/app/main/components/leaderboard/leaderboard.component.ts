import {Component} from '@angular/core';
import {FirestoreHandlerService} from "../../../core/services/firestore-handler.service";
import {TeamService} from "../../../core/services/team.service";
import {Team} from "../../../core/models/team";

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent {

  public teams: Team[] = [];

  constructor(private firestoreHandler: FirestoreHandlerService, private teamService: TeamService) {
    this.getList()
  }

  getList(): void {
    this.teamService.leaderboard().subscribe({
        next: (value) => {
          let data = this.firestoreHandler.buildListDataItem(value);
          this.teams = data.sort(function (a,b) {
            return b.points - a.points
          })
        },
        error: (error) => {
        }
      }
    );
  }

}
