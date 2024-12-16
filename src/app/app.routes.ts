import { Routes } from '@angular/router';
import { AlmacenComponent } from './almacen/almacen.component';
import { LoginComponent } from './inicio/login/login.component';
import { NotFoundComponent } from './inicio/not-found/not-found.component';

export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    {
      path: 'almacen',
      component: AlmacenComponent,
      children: [
        { path: '', redirectTo: '/almacen/categorias', pathMatch: 'full' },
        {
          path: 'categorias',
          loadComponent: () => import('./almacen/categorias/categorias.component').then((c) => c.CategoriasComponent)
        },
        {
          path: 'productos',
          loadComponent: () => import('./almacen/productos/productos.component').then((c) => c.ProductosComponent)
        }
      ]
    },
    { path: '**', component: NotFoundComponent }
  ];