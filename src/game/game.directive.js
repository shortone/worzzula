import Template from './game.html';

export default class GameDirective {

    constructor() {
        return {
            restrict: 'E',
            template: Template,
            scope: {}
        }
    }
}