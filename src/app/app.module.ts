import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AutheticationModule } from './authetication/authetication.module';
import { RouterModule } from '../../node_modules/@angular/router';
import { AppRouteModule } from './app.route.module';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModules } from './material';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { CoreModule } from './core/core.module';




@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AutheticationModule,
    RouterModule,
    AppRouteModule,
    FormsModule,
    MaterialModules,
    BrowserAnimationsModule,
    HttpClientModule,
    CoreModule
   
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
