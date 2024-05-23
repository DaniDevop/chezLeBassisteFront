import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API, Category } from '../../models/data';

@Injectable({
  providedIn: 'root'
})
export class CategoryServiceService {

  constructor(private httpClient:HttpClient) { }



  getAllCategory():Observable<Category[]>{

    return this.httpClient.get<Category[]>(API+"AllCategory");
  }

  addCategory(category:Category):Observable<Category>{
    return this.httpClient.post<Category>(API+"addCategory",category);
  }


  updateCategory(category:Category,id:number):Observable<Category>{
    return this.httpClient.post<Category>(API+"updateCategory/"+id,category);
  }


  getCategoryById(id:number):Observable<Category>{

    return this.httpClient.get<Category>(API+"CategoryById/"+id);
  }
}
