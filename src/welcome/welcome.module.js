import angular from 'angular';

import WelcomeDirective from './welcome.directive';

const welcome = angular.module('worzzula.welcome', []);

welcome.directive('wzlWelcome', () => new WelcomeDirective());

export default welcome.name;