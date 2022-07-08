import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Noticia } from '../models/Noticia.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url: string = 'https://api.spaceflightnewsapi.net/v3/articles?_limit=5'
  constructor(private http: HttpClient) { }

  getNews(): Observable<any> {
    return this.http.get(this.url).pipe(
      map(
        (response: any) => response.map(
          (r: Noticia) => (new Noticia(r))
          ))
    )
  }
}
