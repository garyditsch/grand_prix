import angular from 'angular';
import uiRouter from 'angular-ui-router';
import angularMaterialize from 'angular-materialize';
import chart from 'angular-chart.js';
import appComponent from './app.component';
import PageModule from '../results/page.module';
import CheckinModule from '../checkin/checkin.module';

const AppModule = angular.module('app', [
    uiRouter,
    PageModule.name,
    CheckinModule.name,
    angularMaterialize,
    chart,
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
            })
              .state('checkin', {
                  url: '/checkin/',
                  component: 'checkin',
                  resolve: {
                      checkins(checkinsAPIService) {
                          return checkinsAPIService.getCheckins();
                      },
                  },
              });
    });

export default AppModule;
