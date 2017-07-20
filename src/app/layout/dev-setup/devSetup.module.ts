import { NgModule } from '@angular/core';
import { DevSetupComponent } from './devSetup.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TabsModule } from 'ngx-bootstrap/ng2-bootstrap';


@NgModule({
  imports: [ FormsModule, CommonModule, TabsModule ],
  declarations: [DevSetupComponent],
  exports: [DevSetupComponent]
})



export class DevSetupModule { }
