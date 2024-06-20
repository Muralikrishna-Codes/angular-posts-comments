import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { CommentBoxComponent } from './comment-box/comment-box.component';

const routes: Routes = [
  { path: '', component: PostListComponent },
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    AppComponent,
    PostListComponent,
    PostDetailsComponent,
    CommentBoxComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
