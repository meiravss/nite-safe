import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import {MatInputModule, MatButtonModule, MatSelectModule, MatAutocompleteModule} from '@angular/material';

import { AuthInterceptorService } from './shared/services/auth-interceptor.service';
import { LoggingInterceptorService } from './shared/services/logging-interceptor.service';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ItemsComponent } from './items/items.component';
import { ItemListComponent } from './items/item-list/item-list.component';
import { ItemDetailComponent } from './items/item-detail/item-detail.component';
import { ItemSingleComponent } from './items/item-list/item-single/item-single.component';
import { ProofreadingSystemComponent } from './proofreading-system/proofreading-system.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { ProofreadingSystemService } from './proofreading-system/proofreading-system.service';
import { AppRoutingModule } from './app-routing.module';
import { ItemStartComponent } from './items/item-start/item-start.component';
import { ItemEditComponent } from './items/item-edit/item-edit.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ItemsComponent,
    ItemListComponent,
    ItemDetailComponent,
    ItemSingleComponent,
    ProofreadingSystemComponent,
    DropdownDirective,
    ItemStartComponent,
    ItemEditComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoggingInterceptorService,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    },
    ProofreadingSystemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
