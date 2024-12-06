import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonsTreeComponent } from './buttons-tree.component';
import { ButtonNodeComponent } from './button-node/button-node.component';



@NgModule({
  declarations: [ButtonsTreeComponent,ButtonNodeComponent],
  imports: [
    CommonModule
  ],
  exports: [ButtonsTreeComponent,ButtonNodeComponent]
})
export class ButtonsTreeModuleModule { }
