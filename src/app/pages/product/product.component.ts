import { Component, OnInit } from '@angular/core';
import { ProductHttpService } from 'src/app/services/product-http.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
//ngoninit se ejecuta luego del constructor
export class ProductComponent implements OnInit {
  //httpclient es una clase hacer las peticiones

  constructor(private productHttpService:ProductHttpService) {}//Inyeccion de dependencia

  ngOnInit(): void {
    //this.getProduct();
    //this.getProducts();
    //this.createProduct();
    //this.updateProduct();
    this.deleteProduct();
  }
  getProducts() {
    const url = "https://api.escuelajs.co/api/v1/products";
    return this.productHttpService.getAll().subscribe(
        response => {                    //funcion flecha o landa
        console.log(response);
      });
  }
//subscribe lista de espera va llegar la respuesta
//Observable trae la informacion
  getProduct() {
    const url = "https://api.escuelajs.co/api/v1/products";
    return this.productHttpService.getOne(2).subscribe(response => {
        console.log(response);
      });
  }
  createProduct() {
    
    const url = 'https://api.escuelajs.co/api/v1/products';
    this.productHttpService.store(data).subscribe(
      response => {
      console.log(response);
    });
  }

  updateProduct() {

    this.productHttpService.update(1, data).subscribe(
      response => {
      console.log(response);
    });

  }
  deleteProduct(){
    
    this.productHttpService.eraser(1).subscribe(
      response => {
      console.log(response);
    }
    );

  }

}

