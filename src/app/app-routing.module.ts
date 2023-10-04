import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {ObservablesComponent} from './observables/observables.component'
import { FromEventComponent } from './from-event/from-event.component';
import { IntervalComponent } from './interval/interval.component';
import { OfFromComponent } from './of-from/of-from.component';
import { ToArrayComponent } from './to-array/to-array.component';
import { CustomComponent } from './custom/custom.component';
import { MapComponent } from './map/map.component';
import { PluckComponent } from './pluck/pluck.component';
import { FilterComponent } from './filter/filter.component';
import { TapComponent } from './tap/tap.component';
import { TakeComponent } from './take/take.component';

const routes:Routes = [
  {path:'',pathMatch:'full', redirectTo:'observables'},
  {path:'observables', component:ObservablesComponent},
  {path:'fromEvent', component:FromEventComponent},
  {path:'interval', component:IntervalComponent},
  {path:'of-from', component:OfFromComponent},
  {path:'to-array', component:ToArrayComponent},
  {path:'custom', component:CustomComponent},
  {path:'map', component:MapComponent},
  {path:'pluck', component:PluckComponent},
  {path:'filter', component:FilterComponent},
  {path:'tap', component:TapComponent},
  {path:'take', component:TakeComponent},
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
