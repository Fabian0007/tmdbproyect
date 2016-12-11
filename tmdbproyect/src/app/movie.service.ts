import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { Observable } from 'rxjs';

@Injectable()
export class MovieService {

  private apiKey = "12598c38af2f10ab6066499ccddba71d";
  private url = "//api.themoviedb.org/3";

  constructor(private http: Http) {
    console.log("A MovieService instance was created");
   }

  getPopular(): Observable<any> {
    var request =`${this.url}/movie/popular?api_key=${this.apiKey}`;
    return this.http.get(request)
      .map(response => {
        return response.json().results;
      });
  }
  
  
  getTop():Observable<any> {
    var request =`${this.url}/movie/top_rated?api_key=${this.apiKey}`;
      console.log(request);
    return this.http.get(request)
      .map(response => {
        return response.json().results;
      });
  }
  
  getLatest():Observable<any> {
    var request =`${this.url}/movie/latest?api_key=${this.apiKey}`;
    console.log(request);
    return this.http.get(request)
      .map(response => {
        return response.json().results;
      });
  }
  
  getInTheaters():Observable<any> {
    var request =`${this.url}/movie/now_playing?api_key=${this.apiKey}`;
    console.log(request);
    return this.http.get(request)
      .map(response => {
        return response.json().results;
      });
  }
  
    getUpComing():Observable<any> {
    var request =`${this.url}/movie/upcoming?api_key=${this.apiKey}`;
    console.log(request);
    return this.http.get(request)
      .map(response => {
        return response.json().results;
      });
  }
  
  getMovie(id:number): Observable<any> {
    var request =`${this.url}/movie/${id}?api_key=${this.apiKey}&append_to_response=alternative_titles,credits,releases,videos,similar,reviews,images`;
    console.log(request);
    return this.http.get(request)
      .map(response => {
        return response.json();
      });
  }

}