import template from './page_header.html';

import PageHeaderController from './page_header.controllers';

const pageHeaderComponent = {
    template,
    bindings: {
        me: '<',
    },
    controller: PageHeaderController,
    controllerAs: 'pageHeaderCtrl',
};

export default pageHeaderComponent;
