import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { PagesRoutingModule } from './pages-routing.module';
import { FavComponent } from './fav/fav.component';
import { SearchComponent } from './search/search.component';
import { SharedModule } from './shared/shared.module';
import { DetailsComponent } from './details/details.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [ HomeComponent, FavComponent, SearchComponent, DetailsComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    NgbModule,
    NgxPaginationModule
  ],
})
export class PagesModule { }
