import angular from 'angular';

import LeadersDirective from './leaders.directive';

const leaders = angular.module('worzzula.leaders', []);
leaders.directive('wzlLeaders', () => new LeadersDirective());

export default leaders.name;