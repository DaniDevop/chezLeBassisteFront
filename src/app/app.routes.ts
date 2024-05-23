import { Routes } from '@angular/router';
import { DashboardComponent } from './components/templates/admin/page/Admin/dashboard/dashboard.component';
import { ProductComponent } from './components/templates/admin/page/product/product.component';
import { InputProductComponent } from './components/templates/admin/page/product/input-product/input-product.component';
import { UpdateProductComponent } from './components/templates/admin/page/product/update-product/update-product.component';
import { AddCategoryComponent } from './components/templates/admin/page/Category/add-category/add-category.component';
import { DetailsCategoryComponent } from './components/templates/admin/page/Category/details-category/details-category.component';

export const routes: Routes = [


    {
        path:'',
        component:DashboardComponent,
        children :[

           {
            path:'listesProduct',component:ProductComponent
           },
           {
            path:'addProduct',component:InputProductComponent
           },
           {
            path:'updateProduct/:id',component:UpdateProductComponent
           },

           {
            path:'listesCategory',component:AddCategoryComponent
           },

           {
            path:'updateCategory/:id',component:DetailsCategoryComponent
           },

         ]
    }
];
