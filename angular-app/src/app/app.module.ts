import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './pages/inicio/inicio.component';

import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {DialogModule} from 'primeng/dialog';
import {TabMenuModule} from 'primeng/tabmenu';

import { RodapeComponent } from './components/rodape/rodape.component';
import { CabecalhoComponent } from './components/cabecalho/cabecalho.component';
import { MenuComponent } from './components/menu/menu.component';
import { BlogComponent } from './pages/blog/blog.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    RodapeComponent,
    CabecalhoComponent,
    MenuComponent,
    BlogComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ProgressSpinnerModule,
    CardModule,
    ButtonModule,
    DialogModule,
    TabMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
