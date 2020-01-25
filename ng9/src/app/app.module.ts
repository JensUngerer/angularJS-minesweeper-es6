import { BrowserModule } from '@angular/platform-browser';
import {UpgradeModule} from '@angular/upgrade/static';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import config from './../../../src/common/config';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    UpgradeModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
// https://angular.io/guide/upgrade
export class AppModule {
  constructor(private upgrade: UpgradeModule){

  }
  ngDoBootstrap() {
    this.upgrade.bootstrap(document.body, [config.appName], { strictDi: true});
  }
 }

