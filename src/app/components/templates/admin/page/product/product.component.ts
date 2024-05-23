import { Category } from './../../../../../models/data';
import { Component } from '@angular/core';
import { Product } from '../../../../../models/data';
import { ProductServiceService } from '../../../../../services/Product/product-service.service';
import { InputProductComponent } from './input-product/input-product.component';
import { NgFor, NgIf } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import { NgOptimizedImage } from '@angular/common'
@Component({
  selector: 'app-product',
  standalone: true,
  imports: [ NgFor, NgIf, RouterModule, NgOptimizedImage,],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  productList: Product[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 3  ; // Nombre d'éléments par page



  constructor(private productService: ProductServiceService, public dialog: MatDialog) {
    this.productService.getAllProduct().subscribe((data: Product[]) => {
      this.productList = data;
      console.log(data);
    });
  }

  // Fonction pour obtenir les éléments de la page actuelle
  get paginatedProducts(): Product[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.productList.slice(startIndex, endIndex);
  }

  // Fonction pour changer de page
  changePage(page: number): void {
    this.currentPage = page;
  }

  // Fonction pour obtenir le nombre total de pages
  get totalPages(): number {
    return Math.ceil(this.productList.length / this.itemsPerPage);
  }
}
