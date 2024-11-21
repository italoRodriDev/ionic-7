import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardTwitterComponent } from './card-twitter/card-twitter.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CdkScrollerComponent } from './cdk-scroller/cdk-scroller.component';



@NgModule({
  declarations: [
    CardTwitterComponent,
    CdkScrollerComponent
  ],
  imports: [
    CommonModule,
    ScrollingModule
  ],
  exports: [
    CardTwitterComponent,
    CdkScrollerComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedComponentsModule { }
