import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DatabindingComponent } from './dashboard/databinding.component';
import { SignalsComponent } from './dashboard/signals.component';
import { FormsComponent } from './dashboard/forms.component';

export const routes: Routes = [
	{
		path: 'dashboard',
		component: DashboardComponent,
		children: [
			{ path: '', redirectTo: 'databinding', pathMatch: 'full' },
			{ path: 'databinding', component: DatabindingComponent },
			{ path: 'signals', component: SignalsComponent },
			{ path: 'forms', component: FormsComponent },
		],
	},
];
