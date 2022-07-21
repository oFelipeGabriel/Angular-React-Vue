import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './pages/blog/blog.component';
import { InicioComponent } from './pages/inicio/inicio.component';

const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'blog', component: BlogComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
