import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {CategoriasService} from '../../services/categorias.service';

/**
 * Generated class for the SubcategoriaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-subcategoria',
  templateUrl: 'subcategoria.html',
})
export class SubcategoriaPage {
  categoria = {id: null, titulo: null, descripcion:null};
  id:null;
  constructor(public navCtrl: NavController, public navParams: NavParams, public categoriasService: CategoriasService) {
    this.id = navParams.get('id');
    this.categoria = categoriasService.getCategoria(this.id);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SubcategoriaPage');
  }

}
