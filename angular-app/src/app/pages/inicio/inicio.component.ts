import { Component, OnInit } from '@angular/core';
import { Noticia } from 'src/app/models/Noticia.model';
import { ApiService } from 'src/app/services/api.service';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {
  public noticias: Noticia[] = []
  public carregando: boolean = false;

  constructor(
    private apiService: ApiService, 
    private primengConfig: PrimeNGConfig) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.carregando = true;
    this.apiService.getNews().subscribe(noticias => {
      this.noticias = noticias
      this.carregando = false
    })
  }

}
