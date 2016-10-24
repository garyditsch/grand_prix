import angular from 'angular';
import angularMaterialize from 'angular-materialize';
import appComponent from './app.component';
import PageModule from '../results/page.module';

const AppModule = angular.module('app', [PageModule.name, angularMaterialize,
])
    .component('app', appComponent);

export default AppModule;
