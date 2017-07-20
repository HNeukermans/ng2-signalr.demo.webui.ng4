import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ConnectionResolver } from './groups.route.resolver';
import { ChatModule } from 'app/layout/chat/chat.module';
import { GroupsComponent } from 'app/layout/groups/groups.component';

@NgModule({
    imports: [RouterModule, FormsModule, ChatModule],
    declarations: [GroupsComponent],
    providers: [ConnectionResolver]
})

export class GroupsModule { }
