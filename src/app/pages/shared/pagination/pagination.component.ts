import { Component, OnInit, Input } from '@angular/core';
import { Router, Params } from '@angular/router';

@Component({
  selector: 'pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  @Input() totalPages = 0;
  @Input() currentPage : number;
  pages : any;
  constructor( private router: Router) { }

  ngOnInit(): void {
    let pages = this.totalPages / 10; 
    this.pages = parseInt(pages.toString());
  }

  next = () => this.addQueryParam({page:this.currentPage+1});

  back = () => this.addQueryParam({page:this.currentPage-1 == 0 ? null : this.currentPage-1 });
  

  addQueryParam(queryParams: Params){
		this.router.navigate([],
			{
			  queryParams: queryParams,
			  queryParamsHandling: 'merge', 
		});
	}

}
