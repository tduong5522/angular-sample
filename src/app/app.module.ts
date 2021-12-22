import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { cartReducer } from './cart.reduce';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MenComponent } from './pages/men/men.component';
import { WomenComponent } from './pages/women/women.component';
import { CollectionsComponent } from './pages/collections/collections.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ImageLibraryComponent } from './components/image-library/image-library.component';
import { InfoProductComponent } from './components/info-product/info-product.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,MenComponent,WomenComponent,CollectionsComponent, ContactComponent,
    AboutComponent,
    ImageLibraryComponent,
    InfoProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({cart : cartReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
