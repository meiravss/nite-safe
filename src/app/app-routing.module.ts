import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemsComponent } from './items/items.component';
import { ProofreadingSystemComponent } from './proofreading-system/proofreading-system.component';
import { ItemStartComponent } from './items/item-start/item-start.component';
import { ItemDetailComponent } from './items/item-detail/item-detail.component';
import { ItemEditComponent } from './items/item-edit/item-edit.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/items', pathMatch: 'full' },
  { path: 'items', component: ItemsComponent, children: [
    { path: '', component: ItemStartComponent },
    { path: 'new', component: ItemEditComponent },
    { path: ':id', component: ItemDetailComponent },
    { path: ':id/edit', component: ItemEditComponent },
  ] },
  { path: 'proofreading-system', component: ProofreadingSystemComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
