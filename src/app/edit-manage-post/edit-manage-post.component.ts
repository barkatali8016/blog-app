import { Component, OnInit,Input } from '@angular/core';
import { PostService } from '../post.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { post } from 'selenium-webdriver/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-manage-post',
  templateUrl: './edit-manage-post.component.html',
  styleUrls: ['./edit-manage-post.component.css']
})
export class EditManagePostComponent implements OnInit {
//@Input() public gi;
  ePostIndex=0;
  editForm:FormGroup;
  posts=[];
  postDetails = {
    title:'',
    description:''
  }

  constructor(private service:PostService,private fb:FormBuilder,private router:Router,private route:ActivatedRoute) {
    this.posts=this.route.snapshot.data["editmanagepost"]
    console.log(this.posts)
   }

  ngOnInit() {

    this.ePostIndex = this.route.snapshot.params['id'];

    // console.log(this.ePostIndex);
   // this.posts=this.service.fetchAllPosts();

    this.editForm=this.fb.group( {title:['',[Validators.required,Validators.pattern('^[a-zA-Z][a-zA-Z0-9.,$@; ]+$'),Validators.minLength(2),Validators.maxLength(30)]],
    description:['',[Validators.required]],
  })
  this.putValue();

  }
  putValue(){
  this.postDetails.title=this.posts[0].title;
  this.postDetails.description=this.posts[0].description;
}
  modifyPost(){
    //console.log(this.ePostIndex);
    console.log(this.postDetails);
   const temp={
      id:this.ePostIndex,
      title:this.postDetails.title,
      description:this.postDetails.description
    }
   this.service.updatePost(temp).subscribe(data=>{
     // console.log(typeofdata.success)
    if(data.success ==1){

      this.router.navigate(['/dashboard/managepost']);
    }
    });

  }

}
