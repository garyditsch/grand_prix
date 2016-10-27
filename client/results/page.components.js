import template from './page.html';

import PageController from './page.controllers';

const pageComponent = {
    template,
    bindings: {
        race: '<',
    },
    controller: PageController,
    controllerAs: 'pageCtrl',
};

export default pageComponent;
