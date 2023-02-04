import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DivComponent } from './components/div/div.component';
import { MultComponent } from './components/mult/mult.component';
import { SubstractionComponent } from './components/substraction/substraction.component';
import { AdditionComponent } from './components/addition/addition.component';

@NgModule({
  declarations: [
    AppComponent,
    DivComponent,
    MultComponent,
    SubstractionComponent,
    AdditionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
