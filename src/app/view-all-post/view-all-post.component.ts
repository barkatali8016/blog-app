import { Component, OnInit } from "@angular/core";
import { PostService } from "../post.service";
import { post } from "selenium-webdriver/http";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-view-all-post",
  templateUrl: "./view-all-post.component.html",
  styleUrls: ["./view-all-post.component.css"]
})
export class ViewAllPostComponent implements OnInit {
  posts: any = [];
  constructor(private postService: PostService, private route: ActivatedRoute) {
    this.posts = this.route.snapshot.data["postView"];
    console.log(this.posts);
  }

  ngOnInit() {
    // this.subsribeNewPosts();
    // this.fetchPosts();
  }

  // fetchPosts(){
  //   // this.posts = this.postService.fetchAllPosts();
  //    this.postService.viewAllUserPost().subscribe( data=>{
  //     console.log(data);
  //     this.posts=data
  //   })

  //console.log(this.posts);
}
