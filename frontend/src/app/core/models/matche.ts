import {Audit} from "./audit";
import {Team} from "./team";

export class Matche extends Audit {
  home_team: Team | undefined;
  away_team: Team | undefined;
  score_home: number = 0;
  score_away: number = 0;
  pos_home: string = "";
  pos_away: string = "";
  card_home: number = 0;
  card_away: number = 0;
  status: string = "";
}
