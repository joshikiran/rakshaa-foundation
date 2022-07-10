import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from './components/blog/blog.component';
import { ContactComponent } from './components/contact/contact.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { HomeComponent } from './components/home/home.component';
import { WhatWeDoComponent } from './components/what-we-do/what-we-do.component';
import { WhoWeAreComponent } from './components/who-we-are/who-we-are.component';

const routes: Routes = [
  {
    path : "home",
    component: HomeComponent
  },
  {
    path : "who-we-are",
    component: WhoWeAreComponent
  },
  {
    path : "what-we-do",
    component: WhatWeDoComponent
  },
  {
    path : "gallery",
    component: GalleryComponent
  },
  {
    path : "blog",
    component: BlogComponent
  },
  {
    path : "contact",
    component: ContactComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
