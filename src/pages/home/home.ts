import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import {CategoriasService} from '../../services/categorias.service';
import { SubcategoriaPage} from '../subcategoria/subcategoria';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  categorias=[];
  @ViewChild('myNav') nav: NavController;
  constructor(public navCtrl: NavController, public categoriasService:CategoriasService) {
    this.categorias=categoriasService.getCategorias();
  }
  public goToDetail(id){
    this.navCtrl.push(SubcategoriaPage, {id:id});
  }
}
