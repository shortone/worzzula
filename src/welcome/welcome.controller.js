export default class WelcomeController {

    constructor($scope, $state) {

        $scope.start = function () {
            $state.go('game');
        };

        $scope.highScores = function () {
            $state.go('leaders');
        }
    }
}