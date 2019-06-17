import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,FormControl,Validators} from '@angular/forms';
import { PostService } from '../post.service';
import { Router } from '@angular/router';
  
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
public registerForm:FormGroup;
private passCheck:boolean=true;
usersDetails={
  fname:'',
  lname:'',
  email:'',
  password:'',
  confirmPassword:'',
  phone:'',
  age:''
}  
private regex=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
constructor(private fb:FormBuilder,private service:PostService,private router:Router) { }
  ngOnInit() {
    this.registerForm=this.fb.group(
      {fullname:['',[Validators.required,Validators.pattern('^[a-zA-Z ]*$'),Validators.minLength(2),Validators.maxLength(30)]],
      lastname:['',[Validators.required,Validators.pattern('^[a-zA-Z ]*$'),Validators.minLength(2),Validators.maxLength(30)]],
      email:['',[Validators.required,Validators.pattern(this.regex)]],
      password:['',[Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]],
      confirmpassword:['',[Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]],
      phone:['',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
      age:['',[Validators.required]],
    }
    )
  }

  regSuccess=false;
  regMsg:any;
  RegFrom(){
   // console.log(this.usersDetails.email);
   /// console.log(this.usersDetails.password);
    this.service.addUsers(this.usersDetails).subscribe((data)=>{
      console.log(data);
      if(data.success){
        this.regSuccess=true
        // this.router.navigate(['/dashboard/profile']); 
        this.regMsg=data.msg;
      }else{
        this.regSuccess=true
        this.regMsg=data.msg;
      }
    });

  }
  passwordMatch(btn){
    
    if(this.registerForm.controls.password.value.trim() === this.registerForm.controls.confirmpassword.value.trim())
    {
      if(this.registerForm.invalid==false)
      {
        btn[7].disabled=false;
       // console.log(btn[7]);
      }
      
    }else{
      btn[7].disabled=true;
     // console.log(btn[7]);
    } 
  }

}
