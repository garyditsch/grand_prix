import angular from 'angular';
import uiRouter from 'angular-ui-router';
import angularMaterialize from 'angular-materialize';
import appComponent from './app.component';
import PageModule from '../results/page.module';

const AppModule = angular.module('app', [
    uiRouter,
    PageModule.name,
    angularMaterialize,
])
    .component('app', appComponent)
    .config(($stateProvider, $urlRouterProvider) => {
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('index', {
                url: '/',
                component: 'pageMain',
                resolve: {
                    race(raceAPIService) {
                        return raceAPIService.getRaces();
                    },
                },
            });
    });

export default AppModule;
