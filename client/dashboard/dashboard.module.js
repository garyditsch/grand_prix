import angular from 'angular';
import 'angular-resource';

import dashboardComponent from './dashboard.components';
import resultsAPIService from '../results/results-api.service';
import resultsEditService from '../results/results-edit.service';

const DashboardModule = angular.module('dashboard', ['ngResource'])
    .config(($resourceProvider) => {
        $resourceProvider.defaults.stripTrailingSlashes = false;
    })
    .factory('resultsAPIService', resultsAPIService)
    .factory('resultsEditService', resultsEditService)
    .component('dashboard', dashboardComponent);

export default DashboardModule;
