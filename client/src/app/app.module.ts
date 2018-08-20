import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';

import { TodoEffects, TodosService } from 'store/todo';

import { AppComponent } from './app.component';
import { reducers } from '../store/store.config';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, {}),
    EffectsModule.forRoot([
      TodoEffects
    ]),
    StoreDevtoolsModule.instrument({
      maxAge: 25
    })
  ],
  providers: [
    TodosService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
