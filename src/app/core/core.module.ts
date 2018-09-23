import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { UserService } from './user.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DrugInventoryService } from './drug-inventory.service';


@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
  ],
  exports:[ FlexLayoutModule],
  declarations: [ProfileComponent],
  providers:[UserService,DrugInventoryService]

})
export class CoreModule { }
