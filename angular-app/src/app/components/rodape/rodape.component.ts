import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-rodape',
  templateUrl: './rodape.component.html',
  styleUrls: ['./rodape.component.scss']
})
export class RodapeComponent implements OnInit {
  @Input() texto: string = 'Texto';
  @Output() clicaBotao: EventEmitter<any> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  aoClicarBotao(event: any): void{
    this.clicaBotao.emit(event)
  }

}
