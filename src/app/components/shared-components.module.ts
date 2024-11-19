import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardTwitterComponent } from './card-twitter/card-twitter.component';



@NgModule({
  declarations: [
    CardTwitterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardTwitterComponent
  ]
})
export class SharedComponentsModule { }
