import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/employee',
    pathMatch: 'full'
  },
  {
    path: 'statistics',
    loadChildren: () => import('./statistics/statistics-page.module').then(m => m.StatisticsModule)
  },
  {
    path: 'employee',
    loadChildren: () => import('./employee-rate/employee-rate.module').then(m => m.EmployeeRateModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
