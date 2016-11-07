import angular from 'angular';
import 'angular-resource';

import dashboardComponent from './dashboard.components';
import resultsAPIService from '../results/results-api.service';
import resultsEditService from '../results/results-edit.service';
import userResultsAPIService from '../results/user-results.service';

const DashboardModule = angular.module('dashboard', ['ngResource'])
    .config(($resourceProvider) => {
        $resourceProvider.defaults.stripTrailingSlashes = false;
    })
    .factory('resultsAPIService', resultsAPIService)
    .factory('resultsEditService', resultsEditService)
    .factory('userResultsAPIService', userResultsAPIService)
    .component('dashboard', dashboardComponent);

export default DashboardModule;
