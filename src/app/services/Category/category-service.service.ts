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
}
