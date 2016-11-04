import template from './app.html';
import AppController from './app.controller';

const appComponent = {
    template,
    bindings: {
        races: '<',
    },
    controller: AppController,
    controllerAs: 'appCtrl',
};

export default appComponent;
