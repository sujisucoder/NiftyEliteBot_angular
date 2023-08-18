import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { TablesPageComponent } from './tables-page/tables-page.component';
import { ParentLandingPageComponent } from './landing-page/parent-landing-page/parent-landing-page.component';

const routes: Routes = [
  { path: '', component: ParentLandingPageComponent },
  { path: 'signup', component: SignupPageComponent },
  {
    path: 'table', component: TablesPageComponent
  },
  {
    path: '**', component: PageNotFoundComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
