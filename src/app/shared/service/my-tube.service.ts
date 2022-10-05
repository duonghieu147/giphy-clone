import { HttpClient, HttpContext, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';


const rapidapi = "https://ytube-videos.p.rapidapi.com";
const headers = new HttpHeaders({
  'X-RapidAPI-Key': '077398d34bmsh488ff2e721aacf0p1e708ejsn6581eee251bf',
    'X-RapidAPI-Host': 'ytube-videos.p.rapidapi.com'
});

const rapidapi_v2 = "https://youtube-music1.p.rapidapi.com/v2/search";
const headers_v2 = new HttpHeaders({
  'X-RapidAPI-Key': 'b628748afemsh801d1fc996c1a18p13b27djsn9dcc5502a100',
  'X-RapidAPI-Host': 'youtube-music1.p.rapidapi.com'
});
//https://developers.google.com/youtube/v3/docs/search/list?apix=true
const APP_API_KEY = "AIzaSyAB0yf0DnyKZ0sblNR8z6ZGsAjOdJh97k4"
const token = localStorage.getItem('token');
const headersAuthorization = new HttpHeaders({
  'Authorization': 'Bearer ' + token,
});
@Injectable({
  providedIn: 'root'
})
/** Mock API from rapidapi
 * https://rapidapi.com/pablo970616/api/ytube-videos/
 */
export class MyTubeService {

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

  serchForVideos(q:string, max?: '10', lang?: 'EN'):Observable<any> {
    return this.http.get<any>(rapidapi+`/search-video?q=${q}&max=${10}&lang=${lang}`,{headers:headers})
      .pipe(catchError(this.handleError))
  }

  /**
   * https://youtube-music1.p.rapidapi.com/v2/search
   * https://rapidapi.com/mirzahadjaevaguzal/api/youtube-music1/
   */
   serchForVideoV2(q:string):Observable<any> {
    return this.http.get<any>(rapidapi_v2+`/?query=${q}`,{headers:headers_v2})
      .pipe(catchError(this.handleError))
  }

  searchVieoByYoutube(q:"FIFA 19 DVH private",maxResults?:25,order?:'relevance',videoDuration?:'any',part?:'snippet'):Observable<any> { 
    let params :any ;
      params = {
        key:APP_API_KEY,
        q: q,
        maxResults:maxResults?maxResults:25,
        order:order?order:'relevance',
        videoDuration:videoDuration?videoDuration:'any',
        part:part?part:'snippet'
    };
    return this.http.get<any>(`https://content-youtube.googleapis.com/youtube/v3/search`,{params})
    .pipe(catchError(this.handleError))
  }
}
