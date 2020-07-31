import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { environment } from "src/environments/environment"

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  api = `${environment.api}`;
  token = `${environment.token}`;
  headers = new HttpHeaders({
		'Content-Type'	: 'application/json',
		'Accept'		: 'application/json'
	});
  constructor( private http: HttpClient ) { }


  async GET(url, parameters = []){
		let params = new HttpParams();
		if (parameters.length > 0) {
			for (const param of parameters) {
				params = params.append(param.name, param.value);
			}
		}
		return await this.http.get(`${this.api}${url}&apikey=${this.token}`, {params: params, headers: this.headers } ).toPromise().then(data => {
			return data;
		}).catch((err: HttpErrorResponse) => {
			return { error : err };
		});
  }
  
  async SEARCH(text: string, parameters = []){
		let params = new HttpParams();
		if (parameters.length > 0) {
			for (const param of parameters) {
				params = params.append(param.name, param.value);
			}
		}
		return await this.http.get(`${this.api}?s=${text}&apikey=${this.token}`, {params: params, headers: this.headers } ).toPromise().then(data => {
			return data;
		}).catch((err: HttpErrorResponse) => {
			return { error : err };
		});
	}

}
