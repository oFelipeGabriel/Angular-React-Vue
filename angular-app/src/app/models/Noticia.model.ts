export class Noticia{
   events!: any[];
   featured!: boolean;
   id!: number;
   imageUrl!: string;
   launches!: any[];
   newsSite!: string;
   publishedAt!: string;
   summary!: string;
   title!: string;
   updatedAt!: string;
   url!: string;

   constructor(noticia: Noticia){
    this.events = noticia.events;
    this.featured = noticia.featured;
    this.id = noticia.id;
    this.imageUrl = noticia.imageUrl;
    this.launches = noticia.launches;
    this.newsSite = noticia.newsSite;
    this.publishedAt = noticia.publishedAt;
    this.summary = noticia.summary;
    this.title = noticia.title;
    this.updatedAt = noticia.updatedAt;
    this.url = this.url;
   }
}