import {Audit} from "./audit";

export class Player extends Audit{
  matches: number = 0
  goals: number = 0
  position: string = "";
  name: string = "";
}
