import angular from 'angular';
import uiRouter from 'angular-ui-router';
import angularCookies from 'angular-cookies';
import angularMaterialize from 'angular-materialize';
import chart from 'angular-chart.js';
import appComponent from './app.component';
import PageModule from '../results/page.module';
import CheckinModule from '../checkin/checkin.module';
import DashboardModule from '../dashboard/dashboard.module';

const AppModule = angular.module('app', [
    uiRouter,
    angularCookies,
    PageModule.name,
    CheckinModule.name,
    DashboardModule.name,
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
                    me(raceAPIService) {
                        return raceAPIService.getMe();
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
                    me(raceAPIService) {
                        return raceAPIService.getMe();
                    },
                },
            })
            .state('dashboard', {
                url: '/dashboard/',
                component: 'dashboard',
                resolve: {
                    races(raceAPIService, $transition$) {
                        return raceAPIService
                            .getRaceDetails($transition$.params().id);
                    },
                    results(resultsAPIService) {
                        return resultsAPIService
                            .getUserResults();
                    },
                    me(raceAPIService) {
                        return raceAPIService.getMe();
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
                      races(raceAPIService) {
                          return raceAPIService.getRaces();
                      },
                  },
              });
    })
    .run(($http, $cookies) => {
        // Add a header for CSRF token, so that POST does not fail to our API

        // eslint-disable-next-line no-param-reassign
        $http.defaults.headers.common['X-CSRFToken'] = $cookies.get('csrftoken');
    });

export default AppModule;
