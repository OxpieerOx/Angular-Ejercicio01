import { Component } from '@angular/core';


@Component({
  selector: 'app-contador',
  template:`<h1>{{title}}</h1>


  <button (click)="acumular(base)">+5</button>
  <span>{{numero}}</span>
  <button (click)="acumular(-base)">-6</button>    `,
})

export class ContadorComponent{
  title:string = 'ContadorApp';
  numero:number = 10;
  base:number=5;

  acumular(base:number){
    this.numero+=base;
  }

}