class Cell {
  alive: boolean;
  nextState: boolean;

  constructor(alive: boolean) {
    this.alive = alive;
    this.nextState = false;
  }
}

class GameOfLife {
  width: number;
  height: number;
  grid: Cell[][];

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
    this.grid = [];

    // Inicializar el tablero con celdas muertas
    for (let i = 0; i < height; i++) {
      const row: Cell[] = [];
      for (let j = 0; j < width; j++) {
        row.push(new Cell(false));
      }

      this.grid.push(row);
    }
  }

  setAlive(x: number, y: number, alive: boolean) {
    if (x >= 0 && x < this.width && y >= 0 && y < this.height) {
      this.grid[y][x].alive = alive;
    }
  }

  getNextState(x: number, y: number): boolean {
    const cell = this.grid[y][x];
    const aliveNeighbors = this.countAliveNeighbors(x, y);

    if (cell.alive) {
      if (aliveNeighbors < 2 || aliveNeighbors > 3) {
        return false; // Muere por soledad o sobrepoblación
      }

      return true; // Sobrevive
    }

    if (aliveNeighbors === 3) {
      return true; // Nace
    }

    return false; // Permanece muerta
  }

