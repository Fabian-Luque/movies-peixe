import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  movie: any;
  currentRate = 8;
  constructor(private http: HttpService, private route: ActivatedRoute ) { }

  async ngOnInit() {
    let id = this.route.snapshot.paramMap.get("id");
    let data: any = await this.http.GET(`?i=${id}`);
    this.movie = data.Response === 'True' ? data : null;
  }

}
