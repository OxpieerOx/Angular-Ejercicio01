import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
 
})
export class ListadoComponent  {

  heroes : string[] = ['Spiderman','Hulk','Ironman','Thor']
  heroeborradito : string = ''

  borrarHeroe(){
    const HeroeBorrado = this.heroes.shift() 
    console.log("Borrando...")
    console.log(HeroeBorrado)
    this.heroeborradito=HeroeBorrado || ''
  }

}
