import template from './checkin.html';

import CheckinController from './checkin.controllers';

const checkinComponent = {
    template,
    bindings: {
        checkins: '<',
    },
    controller: CheckinController,
    controllerAs: 'checkinCtrl',
};

export default checkinComponent;
