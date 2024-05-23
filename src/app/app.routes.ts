import { Routes } from '@angular/router';
import { DashboardComponent } from './components/templates/admin/page/Admin/dashboard/dashboard.component';
import { ProductComponent } from './components/templates/admin/page/product/product.component';
import { InputProductComponent } from './components/templates/admin/page/product/input-product/input-product.component';
import { UpdateProductComponent } from './components/templates/admin/page/product/update-product/update-product.component';

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
         ]
    }
];
