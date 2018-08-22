import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import {FormsModule} from '@angular/forms';
import { MaterialModules } from '../material';
import { AuthenticationService } from './authentication.service';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModules,
    
   
  ],
  exports:[LoginComponent],
  declarations: [LoginComponent],
  providers:[AuthenticationService]

})
export class AutheticationModule { }
