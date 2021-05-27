import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegisterComponent } from './register/register.component';
import {SignInComponent} from './sign-in/sign-in.component';
import { AddSubjectComponent} from './add-subject/add-subject.component'
import { SubjectsListComponent} from './subjects-list/subjects-list.component'
const routes: Routes = [
  { path: "register" , component: RegisterComponent},
  { path: "signIn" , component: SignInComponent},
  { path:"addSubject",component: AddSubjectComponent},
  { path : "SubjectsList", component: SubjectsListComponent},
  { path: '',   redirectTo: '/register', pathMatch: 'full' },
  {path:"**",component : PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponent =[RegisterComponent,SignInComponent,AddSubjectComponent,SubjectsListComponent]