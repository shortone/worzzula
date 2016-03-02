import Firebase from 'firebase';

const userScoreRef = new Firebase('https://worzzula.firebaseIO.com/scores/name');

export default ($interval) => {
    return (scope, element, attrs) => {
        let count = 40;

        function updateTimer() {
            element.text(--count);
            if (count < 1) {
                $interval.cancel(stopTimer);
                userScoreRef.setWithPriority({
                    name: 'Jane Doe',
                    score: 120
                }, 120);
            }
        }

        const stopTimer = $interval(updateTimer, 1000);

        element.on('destroy', () => {
            $interval.cancel(stopTimer);
        })
    };
};