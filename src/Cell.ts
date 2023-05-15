export class Cell {
  alive: boolean;
  nextState: boolean;

  constructor(alive: boolean) {
    this.alive = alive;
    this.nextState = false;
  }
}
