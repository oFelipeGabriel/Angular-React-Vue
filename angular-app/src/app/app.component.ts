import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  display: boolean = false;
  title = 'angular-app';

  aoClicar(event: any){
    this.display = true;
    console.log('clicou', event)
  }
}
