import {Audit} from "./audit";

export class Team extends Audit {
  name: string = ""
  coach: string = ""
  matches: number = 0;
  win: number = 0;
  lost: number = 0;
  draw: number = 0;
  points: number = 0;
}
