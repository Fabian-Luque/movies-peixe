import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent {
  textSearch : string = "";
  constructor(  private router: Router ) { }

  search = () => this.router.navigate(['/search/', this.textSearch]);

}
