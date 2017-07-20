import { Route, RouterModule } from '@angular/router';
import { ConnectionResolver } from './documentation.route.resolver';
import { NgModule } from '@angular/core';
import { DocumentationComponent } from './documentation.component';

export const routes: Route[] = [
	{
		path: '',
        component: DocumentationComponent,
        resolve: { connection: ConnectionResolver }
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocumentationRoutingModule { }


