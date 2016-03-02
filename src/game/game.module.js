import angular from 'angular';

import GameDirective from './game.directive';
import GameTimerDirective from './game-timer.directive';

const game = angular.module('worzzula.game', []);

game.directive('wzlGame', () => new GameDirective());

game.directive('wzlGameTimer', GameTimerDirective);

export default game.name;