import { Routes } from '@angular/router'
import { Databinding } from './components/databinding/databinding';
import { Forms } from './components/forms/forms';
import { Signals } from './components/signals/signals';

export const routes: Routes = [
  { path: '', redirectTo: 'databinding', pathMatch: 'full' },
  { path: 'databinding', component: Databinding },
  { path: 'signals', component: Signals },
  { path: 'forms', component: Forms },
];
