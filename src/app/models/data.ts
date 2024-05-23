export interface Category{

  category:string
  id:number
}

export class Product {

  designation!:string
  price!:number
  stock!:number
  id!:number
  profile_one!:string
  category!:Category
  description!:string
  category_id!:number
}
export const API="http://127.0.0.1:8000/";

