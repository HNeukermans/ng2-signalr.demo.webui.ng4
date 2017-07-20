import { Route } from '@angular/router';
import { ConnectionResolver } from "app/layout/groups/groups.route.resolver";
import { GroupsComponent } from "app/layout/groups/groups.component";


export const GroupsRoutes: Route[] = [
	{
		path: 'groups',
		component: GroupsComponent,
		resolve :  { connections : ConnectionResolver }
	}
];
