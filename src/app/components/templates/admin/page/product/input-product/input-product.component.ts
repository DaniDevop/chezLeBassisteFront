import { Component } from '@angular/core';
import { CategoryServiceService } from '../../../../../../services/Category/category-service.service';
import { Category, Product } from '../../../../../../models/data';
import { NgFor, Location } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductServiceService } from '../../../../../../services/Product/product-service.service';

@Component({
  selector: 'app-input-product',
  standalone: true,
  imports: [NgFor,FormsModule],
  templateUrl: './input-product.component.html',
  styleUrl: './input-product.component.css',

})
export class InputProductComponent {


  imageOne?: File ; // Variable to store file
  imageTwo?: File; // Variable to store file

  imagethird ?: File  // Variable to store file

  categoryList:Category[]=[]
  product= new Product()

  constructor(private categoryService:CategoryServiceService,private productService:ProductServiceService,private location:Location) {

    this.categoryService.getAllCategory().subscribe((data=>{

      console.log(this.categoryList=data)
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
     this.productService.addProduct(this.product,this.imageOne,this.imageTwo,this.imagethird)
     .subscribe({

      next:value=> window.alert("Produit ajouté avec succès"),
      error: err => console.error('Observable emitted an error: ' + err)
     })
  }
}
