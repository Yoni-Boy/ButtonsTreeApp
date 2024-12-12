import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonsTreeComponent,ButtonNodeComponent } from './buttons-tree.component';
import { ButtonsTreeService } from './buttons-tree.service';



@NgModule({
  declarations: [ButtonsTreeComponent,ButtonNodeComponent],
  imports: [
    CommonModule
  ],
  exports: [ButtonsTreeComponent,ButtonNodeComponent],
  providers:[ButtonsTreeService],
})
export class ButtonsTreeModule { }
