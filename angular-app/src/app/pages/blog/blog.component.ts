import { Component, OnInit } from '@angular/core';
import { Noticia } from 'src/app/models/Noticia.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  carregando: boolean = false
  posts: Noticia[] = []

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.carregando = true
    this.apiService.getBlogPosts().subscribe((res: any)=>{
      this.posts = res
      this.carregando = false
    })
  }

}
