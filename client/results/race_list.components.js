import template from './race_list.html';

import RaceListController from './race_list.controllers';

const raceListComponent = {
    template,
    bindings: {
        race: '<',
    },
    controller: RaceListController,
    controllerAs: 'raceListCtrl',
};

export default raceListComponent;
