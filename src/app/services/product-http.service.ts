import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductModel} from '../models/product.model';


/*@Injectable({
  providedIn: 'root'
})*/




export class ProductHttpService {

readonly API_URL:string ='https://api.escuelajs.co/api/v1/products'; 

constructor(private httpClient: HttpClient) {}

getAll() {
  return this.httpClient
     .get(this.API_URL )
 }
//subscribe lista de espera va llegar la respuesta
//Observable trae la informacion
 getOne(id:number) {
  const url = `$( this.API_URL )/${id}`;
   this.httpClient
     .get(url);
     
 }
 //almacenar store
 store(product:ProductModel) {
   /*const data = {
     title:'esfero',
     price: 45,
     description: 'utiles escolares',
     category: 1,
     images: ['https://api.lorem.space/image/shoes?w=640&h=480&r=8318'],
   };*/

   return this.httpClient.post(this.API_URL , product)
 }
//actualizar
 update(id:number , product:ProductModel) {
 const url = `$( this.API_URL )/${id}`;
   return this.httpClient.post(url , product )

  

 }
 //borrar
 eraser(id:number){
  const url = `$( this.API_URL )/${id}`;

  
return this.httpClient.delete(url)
 }

}


