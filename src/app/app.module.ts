import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AutheticationModule } from './authetication/authetication.module';
import { RouterModule } from '../../node_modules/@angular/router';
import { AppRouteModule } from './app.route.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AutheticationModule,
    RouterModule,
    AppRouteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
