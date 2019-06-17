import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,FormControl,Validators} from '@angular/forms';
import { PostService } from '../post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  public addForm:FormGroup;
 // postService: any;
  constructor(private fb:FormBuilder,private postService:PostService,private router:Router ) { }

  ngOnInit() {
    this.addForm=this.fb.group(
      {title:['',[Validators.required]],
      description:['',[Validators.required]],
    }
    )
  }
  // addFrom(){
  //   console.log(this.addForm);
  // }
  postDetails = {
    title:"",
    description:''
  }

  addPost(){
    // console.log(this.postDetails);
    this.postService.addPostToService(this.postDetails).subscribe(data=>{
      if(data.success ==1){
        this.router.navigate(["dashboard/viewpost"])
      }
      // console.log(data)
    });
    this.postDetails = {
      title:'',
      description:''
    }
  }



}
