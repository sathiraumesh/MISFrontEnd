import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AutheticationModule } from './authetication/authetication.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AutheticationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
