import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { PostService } from '../post.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-manage-post',
  templateUrl: './manage-post.component.html',
  styleUrls: ['./manage-post.component.css']
})
export class ManagePostComponent implements OnInit {
// @Output() public glbIndex=new EventEmitter();
  postObj:{};
  posts=[];
  i=0;
  constructor(private service:PostService,private route: ActivatedRoute,private router:Router) {
    this.posts=this.route.snapshot.data["managePost"];
    console.log(this.posts);
    console.log(this.posts[0]._id)
   }

  ngOnInit() {


   // this.posts=this.service.fetchAllPosts();

    }

    deletePost(index){
      const id=this.posts[index]._id;

      let bool=window.confirm("Are You sure ?");
      if(bool){
        this.service.deletePost(id).subscribe(data=>{
          //console.log(data)
          if(data.success){
             this.service.viewActiveUserPost().subscribe(data =>{
          //  console.log(data.data)
            this.posts=data.data
          })
          }

        })
        //this.posts.splice(index,1);
      }

    }
    editPost(index){
      // temp={
      //     "id"			      :"5caee26d124db914e4a77a0d",
      //     "title" 		    :"Barkat Ali",
      //     "description"   :"Trainee Developer"
      // }
      const id=this.posts[index]._id;
      console.log(id)
      this.router.navigate(["/dashboard/editmanagepost",id]);
      // this.i=index;
      // this.service.editPostIndex(this.i);
    }

}
