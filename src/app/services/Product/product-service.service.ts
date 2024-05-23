import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API, Product } from '../../models/data';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private httpService :HttpClient) { }




  getAllProduct():Observable<Product[]>{

    return this.httpService.get<Product[]>(API+"listesProduct");
  }

  getProduitById(id:number):Observable<Product>{

    return this.httpService.get<Product>(API+"getProductById/"+id);
  }

  addProduct(product:Product,imageOne ?:File,imageTwo ?:File,imageThree?:File):Observable<any>
  {
    const formData=new FormData();

    formData.append("designation",product.designation);
    formData.append("price",product.price.toString());
    formData.append("stock",product.stock.toString());
    formData.append("category_id",product.category_id.toString());
    formData.append("description",product.description);
      if(imageOne){
        formData.append("image_1",imageOne);
        console.log(imageOne)
      }
      if(imageTwo){
        formData.append("image_2",imageTwo);
      }
      if(imageThree){
        formData.append("image_3",imageThree);
      }
    return this.httpService.post<any>(API+"addProduct",formData);
  }


  updateProduct(product:Product,imageOne ?:File,imageTwo ?:File,imageThree?:File):Observable<any>
  {
    const formData=new FormData();

    formData.append("designation",product.designation);
    formData.append("price",product.price.toString());
    formData.append("stock",product.stock.toString());
    formData.append("category_id",product.category_id.toString());
    formData.append("description",product.description);
      if(imageOne){
        formData.append("image_1",imageOne);
        console.log(imageOne)
      }
      if(imageTwo){
        formData.append("image_2",imageTwo);
      }
      if(imageThree){
        formData.append("image_3",imageThree);
      }
    return this.httpService.post<any>(API+"updateProducts/"+product.id,formData);
  }
}
