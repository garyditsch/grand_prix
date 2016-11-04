import angular from 'angular';
import 'angular-resource';

import pageComponent from './page.components';
import raceListComponent from './race_list.components';
import raceResultsComponent from './race_results.components';
import pageHeaderComponent from './page_header.components';
import pageFooterComponent from './page_footer.components';
import raceAPIService from './page-api.service';
import resultsAPIService from './results-api.service';
import resultsEditService from './results-edit.service';

const PageModule = angular.module('results', ['ngResource'])
    .config(($resourceProvider) => {
        $resourceProvider.defaults.stripTrailingSlashes = false;
    })
    .factory('raceAPIService', raceAPIService)
    .factory('resultsAPIService', resultsAPIService)
    .factory('resultsEditService', resultsEditService)
    .component('pageMain', pageComponent)
    .component('raceList', raceListComponent)
    .component('raceResult', raceResultsComponent)
    .component('pageHeader', pageHeaderComponent)
    .component('pageFooter', pageFooterComponent);


export default PageModule;
