import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  imports: [
    MatButtonModule, 
    MatInputModule,
    MatFormFieldModule,
    MatCardModule
],
  exports:[
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule
]
})

export class MaterialModules{

}