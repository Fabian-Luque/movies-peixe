import { Component,  } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  results = new Array();
  searchText : string;
  totalResults : Number;
  currentPage = 0;
  constructor( private http : HttpService, private route: ActivatedRoute, private router: Router ) {
    router.events.subscribe((val) => { 
      if (val instanceof NavigationEnd) {
        this.init();
      }
    });
    route.queryParams.subscribe(params => {
      this.currentPage = params['page'] ? parseInt(params['page']) : 1;
    });
  }

  async init() {
    this.searchText = this.route.snapshot.paramMap.get("search");
    let params = [];
    if (this.currentPage >= 1) {
      params = [{name: 'page', value : this.currentPage}]
    } 
    let data: any = await this.getResults(this.searchText, params);
    this.results = data.Response === 'True' ? data.Search: null;
    this.totalResults = data.Response === 'True' ? data.totalResults : null;
    
  }

  getResults = (text: string, params = []) => this.http.SEARCH(text, params);



}
