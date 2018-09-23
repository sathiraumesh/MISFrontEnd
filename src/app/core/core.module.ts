import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { UserService } from './user.service';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
  ],
  exports:[ FlexLayoutModule],
  declarations: [ProfileComponent],
  providers:[UserService]

})
export class CoreModule { }
