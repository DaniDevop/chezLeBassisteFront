import { Component } from '@angular/core';
import { Category, Product } from '../../../../../../models/data';
import { ProductServiceService } from '../../../../../../services/Product/product-service.service';
import { ActivatedRoute } from '@angular/router';
import { Location, NgFor } from '@angular/common';
import { CategoryServiceService } from '../../../../../../services/Category/category-service.service';
import { FormsModule } from '@angular/forms';
import { error } from 'console';
import e from 'express';

@Component({
  selector: 'app-update-product',
  standalone: true,
  imports: [FormsModule,NgFor],
  templateUrl: './update-product.component.html',
  styleUrl: './update-product.component.css'
})
export class UpdateProductComponent {


  imageOne?: File ; // Variable to store file
  imageTwo?: File; // Variable to store file

  imagethird ?: File  // Variable to store file
  product!:Product
  categorytList:Category[]=[]

  constructor(private productService:ProductServiceService,private route:ActivatedRoute,
    private location:Location,private categoryService:CategoryServiceService){
   const id =Number(this.route.snapshot.paramMap.get('id'))
    this.productService.getProduitById(id).subscribe(product=>this.product=product)
    this.categoryService.getAllCategory().subscribe((data=>{

      this.categorytList=data
    }))
  }


  onChange(event: any) {
    const file: File = event.target.files[0];

    if (file) {

      this.imageOne = file;

    }
  }
  onChanges(event: any) {
    const file: File = event.target.files[0];

    if (file) {

      this.imageTwo = file;
    }
  }
  onChangesThird(event: any) {
    const file: File = event.target.files[0];

    if (file) {

      this.imagethird = file;
    }
  }


  goBack(){
    this.location.back()
  }
  submit(){
    this.productService.updateProduct(this.product,this.imageOne,this.imageTwo,this.imagethird)
    .subscribe((data=>{
      console.log(data)
      window.alert("Produit mise a jour avec succès")
    }))
 }
}
