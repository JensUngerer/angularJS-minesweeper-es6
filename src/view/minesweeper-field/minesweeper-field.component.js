import angular from 'angular';
import template from './minesweeper-field.component.html';
import './minesweeper-field.component.scss';
import { MinesweeperFieldState } from './../../logic/minesweeper-field-state/minesweeper-field-state';

export class MinesweeperFieldComponent {
  // setup component properties
  static get template() {
    return template;
  }
  //   static get controllerAs() {
  //     return 'minesweeperGameCtrl';
  //   }
  static get controller() {
    return ['$element', MinesweeperFieldComponent];
    // return MinesweeperFieldComponent;
  }

  static get bindings() {
    return {
      field: '<',
      state: '<'
    };
  }

  constructor($element) {
    this.$element = $element;
    this.setText();
    this.setColor();
  }

  $onChanges(changesObj) {
    if (changesObj && changesObj.state) {
      if (changesObj.state.currentValue) {
        this.setText();
        this.setColor();
      }
    }
  }

  mark(event) {
    this.field.mark();
    event.preventDefault();
  }

  reveal() {
    this.field.reveal();
  }

  setText() {
    var result;
    if (this && this.field && this.field.state === MinesweeperFieldState.Unrevealed) {
      result = '?';
    }
    if (this && this.field && this.field.state === MinesweeperFieldState.Marked) {
      result = '-';
    }
    if (
      this &&
      this.field &&
      this.field.state === MinesweeperFieldState.Revealed &&
      this.field.value === -1
    ) {
      result = 'B';
    }
    if (
      this &&
      this.field &&
      this.field.state === MinesweeperFieldState.Revealed &&
      this.field.value === 0
    ) {
      result = '0';
    }
    if (
      this &&
      this.field &&
      this.field.state === MinesweeperFieldState.Revealed &&
      this.field.value > 0
    ) {
      result = this.field.value;
    }
    this.text = result;
  }

  setColor() {
    var result;
    if (this && this.field && this.field.state === MinesweeperFieldState.Unrevealed) {
      result = 'blue';
    }
    if (this && this.field && this.field.state === MinesweeperFieldState.Marked) {
      result = 'grey';
    }
    if (
      this &&
      this.field &&
      this.field.state === MinesweeperFieldState.Revealed &&
      this.field.value === -1
    ) {
      result = 'red';
    }
    if (
      this &&
      this.field &&
      this.field.state === MinesweeperFieldState.Revealed &&
      this.field.value === 0
    ) {
      result = 'lightgreen';
    }
    if (
      this &&
      this.field &&
      this.field.state === MinesweeperFieldState.Revealed &&
      this.field.value > 0
    ) {
      result = 'green';
    }
    this.color = result;

    this.$element.children(0).css('backgroundColor', this.color);
  }
}

export default angular
  .module('minesweeper-field.component', [])
  .component('minesweeperField', MinesweeperFieldComponent).name;
