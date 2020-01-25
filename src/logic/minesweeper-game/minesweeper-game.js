import { MinesweeperField } from '../minesweeper-field/minesweeper-field'
export class MinesweeperGame {
   constructor(width, height, bombs) {
    this._fields = [];
    this._revealedCounter = 0;

    this._width = width;
    this._height = height;
    this._bombs = bombs;

    let i;
    let j;
    let column;
    for (i = 0; i < width; i++) {
      column = [];
      for (j = 0; j < height; j++) {
        column.push(new MinesweeperField(i, j));
      }
      this._fields.push(column);
    }

    this.initNeighbors(this._fields);
    this.fields = this._fields;
    this.reset();
  }

  get width() {
    return this._width;
  }
  set width(value) {
    this._width = value;
  }

  get height() {
    return this._height;
  }
  set height(value) {
    this._height = value;
  }

  get bombs() {
    return this._bombs;
  }
  set bombs(value) {
    this._bombs = value;
  }


  get fields() {
    return this._fields;
  }

  set fields(fields) {
    this._fields = fields;
  }

  get revealedCounter() {
    return this._revealedCounter;
  }

  reset() {
    let i;
    let j;
    let column;
    let field;
    for (i = 0; i < this.fields.length; i++) {
      column = this.fields[i];
      for (j = 0; j < column.length; j++) {
        field = column[j];
        field.reset();
      }
    }

    let remainingBombs = this.bombs;
    while (remainingBombs > 0) {
      let x = Math.floor((Math.random() * this.width));
      let y = Math.floor((Math.random() * this.height));
      const randomField = this.fields[x][y];
      if (randomField.value !== -1) {
        randomField.value = -1;
        randomField.neighbors.forEach((neighborField) => {
          if (neighborField.value !== -1) {
            neighborField.value++;
          }
        });

        remainingBombs--;
      }
    }
    this._revealedCounter = 0;
  }

  /**
   * Initialize the number of neighbors(-bombs) of each field.
   * @param {*} _fields The objects of the kind MinesweeperField
   */
  initNeighbors(_fields) {
    /**
     * A helper function in order to check whether the game-field boundary is reached.
     * @param {*} x The x-coordinate within the game-fields.
     * @param {*} y The y-coordinate within the game-fields.
     * @returns
     */
    const getField = (x, y) => {
      if (this.fields[x] && this.fields[x][y]) {
        return this.fields[x][y];
      } else {
        return undefined;
      }
    }

    let neighbors;
    _fields.forEach((row, x) => {
      row.forEach((field, y) => {
        neighbors = [
          getField(x - 1, y - 1), getField(x, y - 1), getField(x + 1, y - 1),
          getField(x - 1, y), getField(x + 1, y),
          getField(x - 1, y + 1), getField(x, y + 1), getField(x + 1, y + 1)
        ];
        let i = 0;
        while (i < neighbors.length) {
          if (!neighbors[i]) {
            neighbors.splice(i, 1);
            i--;
          }
          i++;
        }
        field.neighbors = neighbors;
      });
    });
  }
}
