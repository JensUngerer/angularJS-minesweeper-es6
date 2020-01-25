import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import ng1AppModuleName from './../../src/app.module';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule).then(ref => {
  (<any>ref.instance).upgrade.bootstrap(document.body, [ng1AppModuleName]);
})
  .catch(err => console.error(err));
