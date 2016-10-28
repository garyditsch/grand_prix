import template from './race_results.html';

import RaceResultsController from './race_results.controllers';

const raceResultsComponent = {
    template,
    bindings: {
        races: '<',
        results: '<',
    },
    controller: RaceResultsController,
    controllerAs: 'raceResultsCtrl',
};

export default raceResultsComponent;
