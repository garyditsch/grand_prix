import angular from 'angular';
import 'angular-resource';

import pageComponent from './page.components';
import raceListComponent from './race_list.components';
import raceAPIService from './page-api.service';

const PageModule = angular.module('results', ['ngResource'])
    .config(($resourceProvider) => {
        $resourceProvider.defaults.stripTrailingSlashes = false;
    })
    .factory('raceAPIService', raceAPIService)
    .component('pageMain', pageComponent)
    .component('raceList', raceListComponent);

export default PageModule;
