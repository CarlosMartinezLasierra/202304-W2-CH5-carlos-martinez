import { Cell } from "./Cell";

describe("Cell", () => {
  it("should initialize alive and nextState correctly", () => {
    const alive = true;

    const cell = new Cell(alive);

    expect(cell.alive).toBe(alive);
    expect(cell.nextState).toBe(false);
  });

  it("should update alive and nextState correctly", () => {
    const alive = true;
    const newAlive = false;

    const cell = new Cell(alive);
    cell.alive = newAlive;
    cell.nextState = true;

    expect(cell.alive).toBe(newAlive);
    expect(cell.nextState).toBe(true);
  });
});
