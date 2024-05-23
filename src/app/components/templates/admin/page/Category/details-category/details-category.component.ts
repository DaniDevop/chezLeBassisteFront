import { Component } from '@angular/core';
import { CategoryServiceService } from '../../../../../../services/Category/category-service.service';
import { Category } from '../../../../../../models/data';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-details-category',
  standalone: true,
  imports: [FormsModule,NgIf],
  templateUrl: './details-category.component.html',
  styleUrl: './details-category.component.css'
})
export class DetailsCategoryComponent {
  message=""


  idCategory:number=0

  category= new Category()
  constructor(private categoryService: CategoryServiceService,private route:ActivatedRoute) {
    this.idCategory =Number(this.route.snapshot.paramMap.get('id'))
    console.log(this.idCategory)
    this.categoryService.getCategoryById(this.idCategory).subscribe(category=>this.category=category);
  }


  update(){
    console.log(this.category)
    if (!this.category.category || this.category.category.trim() === '') { // Vérifie si le champ "category" est vide
      this.message = 'Le champ "category" ne doit pas être vide'; // Affiche un message d'erreur
      return; // Arrête l'exécution du code
    }

    this.message = ''; // Réinitialise le message d'erreur

    this.categoryService.updateCategory(this.category,this.idCategory).subscribe((data) => {
      window.alert('Category  mise à jour  avec succès !');



    });


  }
}
