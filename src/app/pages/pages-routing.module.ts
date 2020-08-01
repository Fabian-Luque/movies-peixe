import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FavComponent } from './fav/fav.component';
import { SearchComponent } from './search/search.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  { path: 'details/:id', component: DetailsComponent},
  { path: 'fav', component: FavComponent},
  { path: 'search/:search', component: SearchComponent},
  { path: '', redirectTo: '/fav', pathMatch: 'full'},
  { path: '**',component: FavComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
