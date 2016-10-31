import angular from 'angular';
import uiRouter from 'angular-ui-router';
import angularMaterialize from 'angular-materialize';
// import Chart from 'chart.js';
import appComponent from './app.component';
import PageModule from '../results/page.module';

const AppModule = angular.module('app', [
    uiRouter,
    PageModule.name,
    angularMaterialize,
    // chart.js,
])
    .component('app', appComponent)
    .config(($stateProvider, $urlRouterProvider) => {
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('index', {
                url: '/',
                component: 'pageMain',
                resolve: {
                    races(raceAPIService) {
                        return raceAPIService.getRaces();
                    },
                },
            })
            .state('race', {
                url: '/race/{id}',
                component: 'raceResult',
                resolve: {
                    races(raceAPIService, $transition$) {
                        return raceAPIService
                            .getRaceDetails($transition$.params().id);
                    },
                    results(resultsAPIService, $transition$) {
                        return resultsAPIService
                            .getResults($transition$.params().id);
                    },
                },
            });
    });

export default AppModule;
