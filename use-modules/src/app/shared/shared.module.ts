import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToKPipe } from './pipes/to-k.pipe';



@NgModule({
  declarations: [ToKPipe],
  exports: [ToKPipe], // make it public...
  imports: [
    CommonModule
    
  ]
})
export class SharedModule { }
