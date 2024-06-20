import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../data.service';
import { PostDetailsComponent } from '../post-details/post-details.component';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
  standalone: true,
  imports: [CommonModule, PostDetailsComponent], // Import PostDetailsComponent
})
export class PostListComponent implements OnInit {
  posts: any[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getPosts().subscribe((posts) => {
      this.posts = posts;
    });
  }
}
