import { Component } from '@angular/core';
import { CategoryServiceService } from '../../../../../../services/Category/category-service.service';
import { Category } from '../../../../../../models/data';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-add-category',
  standalone: true,
  imports: [CommonModule,RouterModule,FormsModule],
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.css'
})
export class AddCategoryComponent {



  message=""

  categorytList: Category[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 3  ; // Nombre d'éléments par page
  category= new Category()
  constructor(private categoryService: CategoryServiceService) {
    this.categoryService.getAllCategory().subscribe((data: Category[]) => {
      this.categorytList = data;
      console.log(data);
    });
  }

  // Fonction pour obtenir les éléments de la page actuelle
  get paginatedCategory(): Category[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.categorytList.slice(startIndex, endIndex);
  }

  // Fonction pour changer de page
  changePage(page: number): void {
    this.currentPage = page;
  }

  // Fonction pour obtenir le nombre total de pages
  get totalPages(): number {
    return Math.ceil(this.categorytList.length / this.itemsPerPage);
  }

  submit(){
    console.log(this.category)
    if (!this.category.category || this.category.category.trim() === '') { // Vérifie si le champ "category" est vide
      this.message = 'Le champ "category" ne doit pas être vide'; // Affiche un message d'erreur
      return; // Arrête l'exécution du code
    }

    this.message = ''; // Réinitialise le message d'erreur

    this.categoryService.addCategory(this.category).subscribe((data) => {
      window.alert('Category ajouté avec succès !');

      this.category.category = ''; // Réinitialise le champ "category"
      this.categoryService.getAllCategory().subscribe((data: Category[]) => {
        this.categorytList = data;
        console.log(data);
      });
    });


  }
}
