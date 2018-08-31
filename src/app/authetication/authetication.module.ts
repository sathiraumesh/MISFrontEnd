import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import {FormsModule} from '@angular/forms';
import { MaterialModules } from '../material';
import { AuthenticationService } from './authentication.service';
import { UserAuthGaurd } from './auth.gaurd';
import { FlexLayoutModule } from '@angular/flex-layout';





@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModules,
    FlexLayoutModule
    
   
  ],
  exports:[LoginComponent],
  declarations: [LoginComponent],
  providers:[AuthenticationService,,UserAuthGaurd]

})
export class AutheticationModule {}
