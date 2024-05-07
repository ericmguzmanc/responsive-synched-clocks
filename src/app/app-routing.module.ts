import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClocksComponent } from './components/clocks/clocks.component';

const routes: Routes = [
  { path: '', redirectTo: 'clocks', pathMatch: 'full' },
  { path: 'clocks', component: ClocksComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
