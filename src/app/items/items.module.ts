import {CommonModule} from "@angular/common";
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import {MatInputModule, MatButtonModule, MatSelectModule, MatAutocompleteModule} from '@angular/material';
import {RouterModule} from "@angular/router";

import { ItemsComponent } from './items.component';
import { ItemListComponent } from './item-list/item-list.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { ItemSingleComponent } from './item-list/item-single/item-single.component';
import { ItemStartComponent } from './item-start/item-start.component';
import { ItemEditComponent } from './item-edit/item-edit.component';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    ItemsComponent,
    ItemListComponent,
    ItemDetailComponent,
    ItemSingleComponent,
    ItemStartComponent,
    ItemEditComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    HttpClientModule,
    RouterModule.forChild([
      {
        path: '' ,
        //resolve : { users : UsersBl },
        component :ItemsComponent, children: [
          { path: '', component: ItemStartComponent },
          { path: 'new', component: ItemEditComponent },
          { path: ':id', component: ItemDetailComponent },
          { path: ':id/edit', component: ItemEditComponent },
        ]
      }
    ])
  ],
  exports: [
    ItemDetailComponent
  ]
})
export class ItemsModule { }
