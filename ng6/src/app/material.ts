import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatFormFieldModule} from '@angular/material/form-field';


@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatToolbarModule, MatIconModule, MatMenuModule, MatFormFieldModule],
  exports: [MatButtonModule, MatCheckboxModule, MatToolbarModule, MatIconModule, MatMenuModule, MatFormFieldModule],
})

export class MaterialModule { }
