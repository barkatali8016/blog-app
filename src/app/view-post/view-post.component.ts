import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.css']
})
export class ViewPostComponent implements OnInit {
  private count=0;
  posts: any = [];
  constructor(private postService: PostService, private route: ActivatedRoute) {
    this.posts = this.route.snapshot.data["userpostView"];
    this.postService.postLengthUpdate(this.posts.length);
    console.log(this.posts);
  }
  ngOnInit() {
    //this.subsribeNewPosts();
    this.postService.postCount.subscribe(data=>{this.count=data});

    //this.fetchPosts();

  }

  // fetchPosts(){
  //   this.posts = this.postService.fetchAllPosts();
  //   //console.log(this.posts);
  //   this.postService.viewActiveUserPost().subscribe(data=>{
  //      console.log(data)
  //     if(data.success){
  //
  //     }
  //     this.posts=data.data;
  //   })
  // }
}
