import Template from './leaders.html';
import LeadersController from './leaders.controller';

export default class LeadersDirective {

    constructor() {
        return {
            restrict: 'E',
            template: Template,
            scope: {},

            controller: LeadersController
        }
    }
}