
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from "rxjs/operators";
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

//i seen it use for call api gits .You can seen it at network with response GET:https://giphy.com/
const GIPHY_FE_WEB_API_KEY = "Gc7131jiJuvI7IdN0HZ1D7nh0ow5BU6g" 
//i seen it use for call api stories .
const GIPHY_FE_STORIES_AND_GIPHY_TV_API_KEY = "3eFQvabDx69SMoOemSPiYfh9FY0nzO9x"

export interface Config {
  id: string;
  nasme: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})

export class GifsService {

  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }

  /**
   * API get data Trends Gifs 
   * @param api_key window.GIPHY_FE_WEB_API_KEY = "Gc7131jiJuvI7IdN0HZ1D7nh0ow5BU6g"
   * @returns 
   */
  getTrendGifs(api_key: string = GIPHY_FE_WEB_API_KEY): Observable<any> {
    return this.http.get<Config>(environment.api+"/v1/gifs/trending?api_key="+api_key)
      .pipe(catchError(this.handleError))
  }
  
  /**
   * API search gifs by keyWord
   * @param api_key 
   * @param keySearch  
   * @returns 
   */
  getSearchGifs(api_key: string = GIPHY_FE_WEB_API_KEY,keyWord:string): Observable<any> {
    return this.http.get<Config>(environment.api+"/v1/gifs/search?offset=0&type=gifs&sort=&q="+keyWord+"&api_key="+api_key)
      .pipe(catchError(this.handleError))
  }

  /**
   * API search gifs related by gif_id
   * @param api_key 
   * @param gif_id  
   * @returns 
   */
  getRelatedGifs(api_key: string = GIPHY_FE_WEB_API_KEY,gif_id:string): Observable<any> {
    return this.http.get<Config>(environment.api+"/v1/gifs/related?gif_id="+gif_id+"&api_key="+api_key)
      .pipe(catchError(this.handleError))
  }

  //TO DO
  getTrendStories(api_key: string = GIPHY_FE_STORIES_AND_GIPHY_TV_API_KEY): Observable<any> {
    return this.http.get<Config>(environment.api1+"/v1/stories/trending?api_key="+api_key+"&sort=desc&gif_hydration_method=COVER_ONLY")
      .pipe(catchError(this.handleError))
  }

  getTrendVideos(api_key: string = GIPHY_FE_WEB_API_KEY): Observable<any> {
    return this.http.get<Config>(environment.api+"/v1/videos/trending?api_key="+api_key+"&offset=0")
      .pipe(catchError(this.handleError))
  }

  getGiphy(): Observable<any> {
    return this.http.get<Config>(environment.api2)
      .pipe(catchError(this.handleError))
  }
}
