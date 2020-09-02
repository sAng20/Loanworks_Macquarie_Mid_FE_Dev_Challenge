import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { UserListComponent } from './controllers/user-list/user-list.component';
import { UserCardDetailComponent } from './components/user-card-detail/user-card-detail.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule ],
  declarations: [ AppComponent, HelloComponent, UserListComponent, UserCardDetailComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
