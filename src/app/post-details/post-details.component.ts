import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentBoxComponent } from '../comment-box/comment-box.component';
import { DataService } from '../data.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css'],
  standalone: true,
  imports: [CommonModule, CommentBoxComponent], // Import CommentBoxComponent
})
export class PostDetailsComponent implements OnInit {
  @Input() post: any;
  comments: any[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getComments().subscribe((comments) => {
      this.comments = comments.filter((comment) => comment.postId === this.post.id);
    });
  }

  addComment(comment: string): void {
    const newComment = {
      postId: this.post.id,
      body: comment,
      userId: 1,
    };

    this.dataService.addComment(newComment).subscribe((comment) => {
      this.comments.push(comment);
    });
  }
}
