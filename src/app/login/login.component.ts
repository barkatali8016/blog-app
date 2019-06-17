import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { PostService } from '../post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userCheck = {
    email: '',
    password: ''
  }
  loginForm: FormGroup;
  private regex=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  constructor(private fb: FormBuilder, private service: PostService,private router:Router) { }
  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required,Validators.pattern(this.regex)]],
      password: ['', [Validators.required,Validators.minLength(8)]],
    });

  }
    tempData:any;

  loginFormValidate() {


        this.service.fatchLoginData(this.userCheck).subscribe((data)=>{
         console.log(this.userCheck)

          //alert(data)
           this.tempData=data;
           console.log( this.tempData);
          if(this.tempData.success==1)
          {
            console.log(this.tempData.data);
            localStorage.setItem('authorization',this.tempData.data);
            this.router.navigate(['/dashboard/profile']);
          }else{
            console.log(this.tempData.msg);
          }
        })
  }

}
