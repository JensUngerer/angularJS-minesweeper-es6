import { MinesweeperGame } from './../../logic/minesweeper-game/minesweeper-game';

import angular from 'angular';
// import template from './minesweeper-game.component.html';
import './minesweeper-game.component.scss';

// https://github.com/angular/angular.js/issues/16252
export class MinesweeperGameComponent {
  // setup component properties
  static get templateUrl() {
    // return template;
    return './minesweeper-game.component.html';
  }
  static get controllerAs() {
    return 'minesweeperGameCtrl';
  }
  static get controller() {
    //return ['NamesService', MinesweeperGameComponent];
    return MinesweeperGameComponent;
  }

  constructor() {
    this.game = new MinesweeperGame(5, 8, 7);

    const tabledFields = [];
    this.game.fields.forEach((row, rowIndex) => {
      row.forEach((field, columnIndex) => {
        if (!tabledFields[columnIndex]) {
          tabledFields[columnIndex] = [];
        }
        tabledFields[columnIndex][rowIndex] = field;
      });
    });
    this.tabledFields = tabledFields;
  }

  reset() {
    this.game.reset();
  }
  
}

export default angular
  .module('minesweeper-game.component', [])
  .component('minesweeperGame', MinesweeperGameComponent).name;
