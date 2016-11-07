import template from './race_menu.html';

import RaceMenuController from './race_menu.controllers';

const raceMenuComponent = {
    template,
    bindings: {
        races: '<',
        me: '<',
    },
    controller: RaceMenuController,
    controllerAs: 'raceMenuCtrl',
};

export default raceMenuComponent;
