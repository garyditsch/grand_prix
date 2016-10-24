import angular from 'angular';
import 'angular-resource';

import pageComponent from './page.components';

const PageModule = angular.module('results', ['ngResource'])
    .component('pageMain', pageComponent);

export default PageModule;
