import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import {FormsModule} from '@angular/forms';
import { MaterialModules } from '../material';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModules
   
  ],
  exports:[LoginComponent],
  declarations: [LoginComponent],

})
export class AutheticationModule { }
