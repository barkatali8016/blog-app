import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import {Apimodel} from '../Apimodel';
  import { from } from 'rxjs';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder,Validators,FormControl } from '@angular/forms';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

public registerForm:FormGroup;
usersDetails:any={
  fname:'',
  lname:'',
  email:'',
  password:'',
  confirmPassword:'',
  phone:'',
  age:'',
  presentaddress:'',
  parmanentaddress:'',
  dob:'',
  gender:'',
  hobbi:'',
  languageknown:'',
}
  editProfileStatus=false;

  info={
    fname:'',
    lname:'',
    email:'',
    password:'',
    age: '',
    phone:'',
    _id:''
  };
  private regex=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  constructor(private postService:PostService,private router:Router,private fb:FormBuilder) { }

  ngOnInit() {


    if(localStorage.getItem('authorization')){
      this.postService.getUserInfo().subscribe(data=>{


   //   this.info=this.userInfo.data[0];
      this.usersDetails=data.data[0];
      // console.log(this.info)

      })
    }else{
        alert("User is not Login... pls login first");
        this.router.navigate(["/login"])
    }

    this.registerForm=this.fb.group(

      {fullname:['',[Validators.required,Validators.pattern('^[a-zA-Z ]*$'),Validators.minLength(2),Validators.maxLength(30)]],
      lastname:['',[Validators.required,Validators.pattern('^[a-zA-Z ]*$'),Validators.minLength(2),Validators.maxLength(30)]],
      email:['',[Validators.required,Validators.pattern(this.regex)]],
      password:['',[Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]],
      confirmpassword:['',[Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]],
      phone:['',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
      age:['',[Validators.required]],
      presentaddress:[''],
      parmanentaddress:[''],
      dob:[''],
      gender:[''],
      hobbi:[''],
      languageknown:[''],}
    )
  }

  profileUpdate(){
    console.log(this.usersDetails)
  }
  viewEditProfile(){

      this.editProfileStatus=!this.editProfileStatus;

  }



}



// {data: Array(1), success: 1, msg: "profile Details Generated"}
// data: Array(1)
// 0: {_id: "5cb02d7ade106223bc7ff86e", fname: "barkat", lname: "ali", email: "barkat123@gmail.com", password: "Barkat123@", …}
// length: 1
// __proto__: Array(0)
// msg: "profile Details Generated"
// success: 1
// __proto__: Object
