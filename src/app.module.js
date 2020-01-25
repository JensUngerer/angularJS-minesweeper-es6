import angular from 'angular';
// import { AppComponent } from './../ng9/src/app/app.component';
// import { IDirectiveFactory } from 'angular';
import config from './common/config';

// import views from './views/views.module';
import persistentComponents from './components/persistent-components.module';
import rightClickDirective from './view/right-click/right-click.directive';

import '@uirouter/angularjs';
import 'angular-local-storage';

// import { downgradeComponent } from "./../ng9/node_modules/@angular/upgrade/static";

// import './common/app.scss';

const appModule = angular
  .module(config.appName, [
    rightClickDirective,
    // views,
    persistentComponents,
    'ui.router',
    'LocalStorageModule'
  ]);

  // appModule.config(['$stateProvider', '$locationProvider', ($stateProvider, $locationProvider) => {
  //   Object.keys(config.stateUrls).forEach(stateKey => {
  //     $stateProvider.state({
  //       name: stateKey,
  //       component: stateKey,
  //       url: config.stateUrls[stateKey]
  //     });
  //   });

  //   $locationProvider.html5Mode(true);
  // }]);

  // angular.module(appModule.name, []).directive(
  //   'ng2AppRoot',
  //   downgradeComponent({component: AppComponent})
  // );

angular.element(document).ready(() => {
  angular.bootstrap(document, [config.appName], { strictDi: true });
});

export default appModule.name;