import template from './page.html';

import PageController from './page.controllers';

const pageComponent = {
    template,
    bindings: {
        races: '<',
        me: '<',
    },
    controller: PageController,
    controllerAs: 'pageCtrl',
};

export default pageComponent;
