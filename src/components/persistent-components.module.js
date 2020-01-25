import angular from 'angular';
import config from '../common/config';

import navigation from './navigation/navigation.component';
import minesweeperGame from './../view/minesweeper-game/minesweeper-game.component';
import minesweeperField from './../view/minesweeper-field/minesweeper-field.component';

export default angular
  .module(`${config.appName}.persistentComponents`, [
    navigation,
    minesweeperGame,
    minesweeperField
  ])
  .name;