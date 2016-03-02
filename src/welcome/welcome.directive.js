import template from './welcome.html';
import wzlWelcomeController from './welcome.controller';

export default class WelcomeDirective {

    constructor() {

        return {
            restrict: 'E',
            template: template,
            scope: {},

            controller: wzlWelcomeController
        }
    }
}