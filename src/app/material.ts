import { NgModule } from '@angular/core';
import {MatButtonModule, MatNativeDateModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatMenuModule} from '@angular/material/menu';
import {MatPaginatorModule} from '@angular/material/paginator';

@NgModule({
  imports: [
    MatButtonModule, 
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatMenuModule,
    MatPaginatorModule
    

    
],
  exports:[
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatSelectModule,
    MatDatepickerModule,
    MatMenuModule,
    MatPaginatorModule
    

    
],
providers:[MatNativeDateModule]
})

export class MaterialModules{

}