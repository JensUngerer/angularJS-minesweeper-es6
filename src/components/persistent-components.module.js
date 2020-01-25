import angular from 'angular';
import config from '../common/config';

import navigation from './navigation/navigation.component';
import minesweeperGame from './../view/minesweeper-game/minesweeper-game.component';

export default angular
  .module(`${config.appName}.persistentComponents`, [
    navigation,
    minesweeperGame
  ])
  .name;