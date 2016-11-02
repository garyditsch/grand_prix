import angular from 'angular';
import 'angular-resource';

// import pageFooterComponent from '../results/page_footer.components';
// import pageHeaderComponent from '../results/page_header.components';
import checkinComponent from './checkin.components';
import checkinsAPIService from './checkin-api.service';

const CheckinModule = angular.module('checkin', ['ngResource'])
    .config(($resourceProvider) => {
        $resourceProvider.defaults.stripTrailingSlashes = false;
    })
    .factory('checkinsAPIService', checkinsAPIService)
    // .component('pageHeader', pageHeaderComponent)
    // .component('pageFooter', pageFooterComponent)
    .component('checkin', checkinComponent);

export default CheckinModule;
