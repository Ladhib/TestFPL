import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, RoutingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AddSubjectComponent } from './add-subject/add-subject.component';
import { SubjectsListComponent } from './subjects-list/subjects-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddSubjectComponent,
    SignInComponent,
    RegisterComponent,
    SubjectsListComponent,
    PageNotFoundComponent,
    RoutingComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
