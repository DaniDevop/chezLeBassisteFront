export class Category{

  category!:string
  id!:number
  created_at!:string
  updated_at!:string
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

