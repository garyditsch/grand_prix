import template from './checkin.html';

import CheckinController from './checkin.controllers';

const checkinComponent = {
    template,
    bindings: {
        checkins: '<',
        races: '<',
    },
    controller: CheckinController,
    controllerAs: 'checkinCtrl',
};

export default checkinComponent;
