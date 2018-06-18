import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../../services/post.service';

import { Post } from '../../models/Post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
    post: Post;
    postid: string;

    constructor(
        private route: ActivatedRoute,
        private postService: PostService) {

        this.route.params.subscribe(params => this.postid = params.id);

        console.log(`post id : ${this.postid} _ constructor`);
    }

    ngOnInit() {
        const id = +this.route.snapshot.paramMap.get('id');
        console.log(`post id : ${this.postid} _ init`);

        this.postService.getPost(id).subscribe(post => this.post = post);
    }
}
