import { MinesweeperFieldState } from '../minesweeper-field-state/minesweeper-field-state';

export class MinesweeperField {
  constructor(x = 0, y = 0) {
    this._x = x;
    this._y = y;
    this._state = MinesweeperFieldState.Unrevealed;
    this._value = 0;
  }

  get value() {
    return this._value;
  }
  set value(newValue) {
      this._value = newValue
  }
  
  get neighbors() {
      return this._neighbors;
  }

  set neighbors(newValue) {
    this._neighbors = newValue;
  }

  get state() {
    return this._state;
  }

  set state(state) {
    this._state = state;
  }

  mark() {
    if (this._state !== MinesweeperFieldState.Revealed) {
      this._state = MinesweeperFieldState.Marked;
    }
  }

  reveal() {
    if (this._state === MinesweeperFieldState.Revealed) {
      return;
    }
    this._state = MinesweeperFieldState.Revealed;

    if (this._value === 0) {
      this._neighbors.forEach(neighborField => {
        neighborField.reveal();
      });
    }
  }

  reset() {
    this._value = 0;
    this._state = MinesweeperFieldState.Unrevealed;
  }
}
