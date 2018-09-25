import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { MaterialModules } from '../material';
import { AuthenticationService } from './authentication.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth.interceptor';
import { AdminAuthGaurd, DoctorAuthGaurd } from './auth.gaurd';





@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModules,
    FlexLayoutModule


  ],
  exports: [
    LoginComponent
  ],
  declarations: [
    LoginComponent
  ],
  providers: [
    AuthenticationService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    AdminAuthGaurd,
    DoctorAuthGaurd
  ]

})
export class AutheticationModule { }
