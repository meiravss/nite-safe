import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
//import {MatInputModule, MatButtonModule, MatSelectModule, MatAutocompleteModule} from '@angular/material';
import {PreloadAllModules, RouterModule} from "@angular/router";

import { AuthInterceptorService } from './shared/services/auth-interceptor.service';
import { LoggingInterceptorService } from './shared/services/logging-interceptor.service';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProofreadingSystemComponent } from './proofreading-system/proofreading-system.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { ProofreadingSystemService } from './proofreading-system/proofreading-system.service';
//import { AppRoutingModule } from './app-routing2.module2.ts2';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProofreadingSystemComponent,
    DropdownDirective
  ],
  imports: [
    /*  Angular Modules */
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    //MatInputModule,
    //AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/items', pathMatch: 'full' },
      // {
      //   path: 'login',
      //   component: LoginComponent
      // },
      { path: 'proofreading-system', component: ProofreadingSystemComponent },
      {
        path: 'items',
        //canLoad: [SecurityDemoService],
        // TODO Eyal: apply https://stackoverflow.com/questions/56375703/angular-8-lazy-loading-modules-error-ts1323-dynamic-import-is-only-supporte,
        //  but still gets this error
        loadChildren: () => import( './items/items.module' )
            .then(moduleJSFile => moduleJSFile.ItemsModule)

        /*async () => {
          let module = await import( './users/users.module' );
          return  module.UsersModule;
        }*/
      },
      {path: '**', redirectTo: '/items'}
    ], {
      useHash: true,
      preloadingStrategy: PreloadAllModules
    })
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
