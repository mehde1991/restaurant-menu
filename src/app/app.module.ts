/**
 * Angular Imports
 */
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {MdButtonModule, MdCheckboxModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

/**
 * Modules
 */
import {CategoryModule} from './category/category.module';
import {MealModule} from './meal/meal.module';
import { CartModule } from './cart/cart.module';

/**
 * Components
 */
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';

/**
 * Routing
 */
import {AppRoutingModule} from './app-routing.module';

/**
 * Angular in memory
 */
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './shared/in-memory-data.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MdButtonModule,
    MdCheckboxModule,
    BrowserAnimationsModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule,
    CategoryModule,
    MealModule,
    CartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
