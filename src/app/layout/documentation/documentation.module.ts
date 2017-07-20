import { NgModule } from '@angular/core';
import { DocumentationComponent } from './documentation.component';
//import { ChatComponent } from './chat';
import { ConnectionResolver } from './documentation.route.resolver';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TabsModule } from 'ngx-bootstrap';
import { ChatModule } from 'app/layout/chat/chat.module';
import { DocumentationRoutingModule } from './documentation.routing.module';

@NgModule({
  imports: [ FormsModule, CommonModule, TabsModule, ChatModule, DocumentationRoutingModule ],
  providers: [ConnectionResolver],
  declarations: [DocumentationComponent],
  exports: [DocumentationComponent]
})

export class DocumentationModule { }
