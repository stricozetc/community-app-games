import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { TodoEffects, TodosService } from 'store/todo';
import { QuizEffects, QuizService, QuizFacade } from 'store/quiz';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { reducers } from 'store/store.config';
import { TimerService } from './services';
import { HomeComponent, PathNotFoundComponent, QuizComponent, ResultComponent, SpinnerComponent } from './components';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PathNotFoundComponent,
    QuizComponent,
    ResultComponent,
    SpinnerComponent
  ],
  imports: [
    MatButtonModule,
    BrowserModule,
    FormsModule,
    MaterialModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, {}),
    EffectsModule.forRoot([
      TodoEffects,
      QuizEffects
    ]),
    StoreDevtoolsModule.instrument({
      maxAge: 25
    }),
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
    TodosService,
    QuizService,
    TimerService,
    QuizFacade
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
