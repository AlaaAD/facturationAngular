import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FacturationComponent } from './components/facturation/facturation.component';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { NavbarComponent } from './components/partials/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { CostumersComponent } from './components/costumers/costumers.component';
import { InventoryComponent } from './components/inventory/inventory.component';

const appRoutes: Routes = [
  { path: 'facturation', component: FacturationComponent },
  { path: 'customers', component: CostumersComponent },
  { path: 'inventory', component: InventoryComponent },
  { path: 'about', component: AboutComponent },
  { path: 'home', component: HomeComponent },
  { path: '',
    redirectTo: '/',
    pathMatch: 'full'
  }
];


@NgModule({
  declarations: [
    AppComponent,
    FacturationComponent,
    NavbarComponent,
    AboutComponent,
    HomeComponent,
    CostumersComponent,
    InventoryComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
