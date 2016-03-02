import angular from 'angular';
import uiRouter from 'angular-ui-router';

import wzlWelcome from './welcome/welcome.module';
import wzlGame from './game/game.module';
import wzlLeaders from './leaders/leaders.module';

const app = angular.module('worzzula', [uiRouter, wzlWelcome, wzlGame, wzlLeaders]);

app.config(($stateProvider, $urlRouterProvider) => {
    $urlRouterProvider.otherwise('/');

    $stateProvider.state('welcome', {
        url: '/',
        template: '<wzl-welcome></wzl-welcome>'
    }).state('game', {
        url: '/game',
        template: '<wzl-game></wzl-game>'
    }).state('leaders', {
        url: '/leaders',
        template: '<wzl-leaders></wzl-leaders>'
    });
});