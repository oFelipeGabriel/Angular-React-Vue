import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Noticia } from '../models/Noticia.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url: string = 'https://api.spaceflightnewsapi.net/v3/'
  constructor(private http: HttpClient) { }

  getNews(): Observable<any> {
    let noticiaUrl = this.url+'articles';
    const params: any = {_limit: 5}
    return this.http.get(noticiaUrl, {params}).pipe(
      map(
        (response: any) => response.map(
          (r: Noticia) => (new Noticia(r))
          ))
    )
  }

  getBlogPosts(): Observable<any> {
    let blogUrl = this.url+'blogs';
    const params: any = {_limit: 5}
    return this.http.get(blogUrl, {params}).pipe(
      map(
        (response: any) => response.map(
          (r: Noticia) => (new Noticia(r))
        )
      )
    )
  }
}
