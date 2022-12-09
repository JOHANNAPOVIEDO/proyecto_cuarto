import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateProductDto, ProductModel, UpdateProductDto } from '../models/product.model';

//servicio hace la peticion al back y le llega la respuesta
//todos los componentes de comunican con un solo servicio
@Injectable({ //Decorador 
  providedIn: 'root'
})
export class ProductHttpService {
  readonly API_URL:string="https://api.escuelajs.co/api/v1/products";//solo de lectura la vareiable
  constructor(private httpClient: HttpClient) { }//metodos httpclient

  getAll() {
     return this.httpClient.get(this.API_URL);
   }
   getOne(id:ProductModel['id']) {
   const url = `${this.API_URL}/${id}`;
    return this.httpClient.get(url);
   }
         //objeto de tipo productmodel
   store(product:CreateProductDto) { 
    return this.httpClient.post(this.API_URL, product)
   }
 
   update(product:UpdateProductDto,id:ProductModel['id'])  {
    const url = `${this.API_URL}/${id}`;
    return this.httpClient.put(url, product)
 
   }
   destroy(id:ProductModel['id']) {
    const url = `${this.API_URL}/${id}`;
     return this.httpClient.delete(url)
  
   }
}
// ng g s services/productHttp   -genera el archivo de servicio
