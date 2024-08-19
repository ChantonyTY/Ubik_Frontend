import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router'; // Importer RouterModule

import { AppComponent } from './app.component';
import { TableListComponent } from './table-list/table-list.component';
import { TableDetailComponent } from './table-detail/table-detail.component';

const routes: Routes = [
  { path: 'tables', component: TableListComponent },
  { path: 'table/:id', component: TableDetailComponent },
  { path: '', redirectTo: '/tables', pathMatch: 'full' }
];
@NgModule({
  declarations: [
    AppComponent,
    TableListComponent,
    TableDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes) // Ajouter RouterModule ici
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
