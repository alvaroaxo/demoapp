import {Injectable} from '@angular/core';
@Injectable()
export class CategoriasService
{
  categorias = [
    {id:1, titulo:'Categoria 1', descripcion:'Descripcion categoria 1'},
    {id:2, titulo:'Categoria 2', descripcion:'Descripcion categoria 2'},
    {id:3, titulo:'Categoria 3', descripcion:'Descripcion categoria 3'},
    {id:4, titulo:'Categoria 4', descripcion:'Descripcion categoria 4'},
    {id:5, titulo:'Categoria 5', descripcion:'Descripcion categoria 5'}
  ];
  public getCategorias(){
    return this.categorias;
  }
  public getCategoria(id) {
    return this.categorias.filter(function(e, i){return e.id == id}) [0] || {id: null, titulo: null, descripcion:null};
  }
}
