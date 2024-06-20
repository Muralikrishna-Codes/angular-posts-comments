import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-comment-box',
  templateUrl: './comment-box.component.html',
  styleUrls: ['./comment-box.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule], // Import necessary modules
})
export class CommentBoxComponent {
  commentText: string = '';

  @Output() addComment = new EventEmitter<string>();

  onSubmit(): void {
    if (this.commentText.trim() !== '') {
      this.addComment.emit(this.commentText);
      this.commentText = '';
    }
  }
}
