import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private postsUrl = 'https://jsonplaceholder.typicode.com/posts';
  private commentsUrl = 'https://jsonplaceholder.typicode.com/comments';

  constructor(private http: HttpClient) { }

  getPosts(): Observable<any[]> {
    return this.http.get<any[]>(this.postsUrl);
  }

  getComments(): Observable<any[]> {
    return this.http.get<any[]>(this.commentsUrl);
  }

  addComment(comment: any): Observable<any> {
    return this.http.post<any>(this.commentsUrl, comment);
  }
}
