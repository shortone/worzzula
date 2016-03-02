import Firebase from 'firebase';

export default class LeadersController {

    constructor($scope) {
        const ref = new Firebase('https://worzzula.firebaseIO.com');
        const scoresRef = ref.child('scores');

        scoresRef.on('value', (snapshot) => {
            $scope.scores = snapshot.val();
            console.log($scope.scores);
        });
    }
}