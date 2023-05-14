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
        return false;
      }

      return true;
    }

    if (aliveNeighbors === 3) {
      return true;
    }

    return false;
  }

  countAliveNeighbors(x: number, y: number): number {
    let count = 0;

    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        if (i === 0 && j === 0) continue;

        const neighborX = x + j;
        const neighborY = y + i;

        if (
          neighborX >= 0 &&
          neighborX < this.width &&
          neighborY >= 0 &&
          neighborY < this.height
        ) {
          if (this.grid[neighborY][neighborX].alive) {
            count++;
          }
        }
      }
    }

    return count;
  }

  update() {
    // Calcular el siguiente estado de cada celda
    for (let i = 0; i < this.height; i++) {
      for (let j = 0; j < this.width; j++) {
        this.grid[i][j].nextState = this.getNextState(j, i);
      }
    }

    for (let i = 0; i < this.height; i++) {
      for (let j = 0; j < this.width; j++) {
        this.grid[i][j].alive = this.grid[i][j].nextState;
      }
    }
  }

  print() {
    for (let i = 0; i < this.height; i++) {
      let row = "";
      for (let j = 0; j < this.width; j++) {
        row += this.grid[i][j].alive ? "■ " : "□ ";
      }

      console.log(row);
    }
  }
}

const game = new GameOfLife(10, 10);

game.setAlive(3, 4, true);
game.setAlive(4, 4, true);
game.setAlive(5, 4, true);

for (let i = 0; i < 5; i++) {
  console.log(`Iteración ${i + 1}:`);
  game.print();
  game.update();
  console.log("--------------------");
}
