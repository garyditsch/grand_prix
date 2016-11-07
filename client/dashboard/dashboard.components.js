import template from './dashboard.html';

import DashboardController from './dashboard.controllers';

const DashboardComponent = {
    template,
    bindings: {
        races: '<',
        results: '<',
        userResults: '<',
        me: '<',
    },
    controller: DashboardController,
    controllerAs: 'dashboardCtrl',
};

export default DashboardComponent;
