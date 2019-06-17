import { Injectable } from '@angular/core';
import {Apimodel} from './Apimodel';
//import { post } from 'selenium-webdriver/http';
//import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { from, Observable,BehaviorSubject } from 'rxjs';
import { post } from 'selenium-webdriver/http';
import { FakeApiModel } from './Model/FakeApiModel';
@Injectable({
  providedIn: 'root'
})
export class PostService {
  posts = [];
  userList = [];
  // postCount=0;
  private postLength = new BehaviorSubject(0);
  public postCount = this.postLength.asObservable();
  constructor(private http:HttpClient) {
    let temp = {
      title: 'Subha',
      description: 'developer'
    }
    this.posts.push(temp)
  }
  gblIndex = 0;

  addPostToService(data):Observable<Apimodel> {
    // let tempdata = {
    //   title: data.title,
    //   description: data.description
    // }
    let httpHeaders = new HttpHeaders ({
      'Content-Type': 'application/json',
      'authorization': localStorage.getItem('authorization')
    });
    // this.postLengthUpdate();
    return this.http.post<Apimodel>('http://localhost:3000/api/auth/post/addpost',data, { headers: httpHeaders });
   // this.posts.push(tempdata);


  }
  fetchAllPosts() {
    return this.posts;
  }
  editPostIndex(i) {
    this.gblIndex = i;
  }
  modifyPostArray(index, modifyObj) {
    let tempdata = {
      title: modifyObj.title,
      description: modifyObj.description
    }
    //  this.posts.push(tempdata);
    this.posts[index].title = tempdata.title;
    this.posts[index].description = tempdata.description;
    //  console.log(tempdata.title);
    //  console.log(tempdata.description);
    //  console.log(index);
  }

  // for register
  addUsers(user):Observable<Apimodel>{
    let temp = {
      fname: user.fname,
      lname: user.lname,
      email: user.email,
      password: user.password,
      confirmPassword: user.confirmPassword,
      phone: user.phone,
      age: user.age
    }
    let httpHeaders=new HttpHeaders({
      'Content-Type': 'application/json',
    })
   return this.http.post<Apimodel>('http://localhost:3000/api/user/register',temp,{headers:httpHeaders});
   // this.userList.push(temp);
  }
//for login
  fatchLoginData(loginData):Observable<Apimodel>{
    let httpHeaders=new HttpHeaders({
      'Content-Type': 'application/json',
    })
    return this.http.post<Apimodel>('http://localhost:3000/api/user/login',loginData,{headers:httpHeaders});
    //return this.userList;
  }

  //for profile

  getUserInfo():Observable<Apimodel>{

    let httpHeaders = new HttpHeaders ({
      'Content-Type': 'application/json',
      'authorization': localStorage.getItem('authorization')
    });
    return this.http.get<Apimodel>('http://localhost:3000/api/auth/user/profile', { headers: httpHeaders });
  }

  viewActiveUserPost():Observable<Apimodel>{
    let httpHeaders = new HttpHeaders ({
     // 'Content-Type': 'application/json',
      'authorization': localStorage.getItem('authorization')
    });

    const data=this.http.get<Apimodel>('http://localhost:3000/api/auth/post/viewpost', { headers: httpHeaders });
   return data;
  }
  postLengthUpdate(length){
    this.postLength.next(length);
  }
  viewAllUserPost():Observable<Apimodel>{
    let httpHeaders = new HttpHeaders ({
     // 'Content-Type': 'application/json',
      'authorization': localStorage.getItem('authorization')
    });

    const data=this.http.get<Apimodel>('http://localhost:3000/api/auth/post/viewallpost', { headers: httpHeaders });
    // const data=this.http.get<Apimodel>('https://jsonplaceholder.typicode.com/posts', { headers: httpHeaders });

    return data;
  }
  // viewAllUserPost():Observable<FakeApiModel[]>{
  //   let httpHeaders = new HttpHeaders ({
  //    // 'Content-Type': 'application/json',
  //     'authorization': localStorage.getItem('authorization')
  //   });

  //   // const data=this.http.get<Apimodel>('http://localhost:3000/api/auth/post/viewallpost', { headers: httpHeaders });
  //   const data = this.http.get<FakeApiModel[]>('https://jsonplaceholder.typicode.com/posts');

  //   return data;
  // }
  deletePost(id):Observable<Apimodel>{
    let httpHeaders=new HttpHeaders({
      'Content-Type': 'application/json',
      'authorization': localStorage.getItem('authorization')
    })
    return this.http.post<Apimodel>('http://localhost:3000/api/auth/post/removepost',{"id":id},{headers:httpHeaders});
    //return this.userList;
  }
  viewSinglePost(id){
    let httpHeaders=new HttpHeaders({
      'Content-Type': 'application/json',
      'authorization': localStorage.getItem('authorization')
    })
    return this.http.post<Apimodel>('http://localhost:3000/api/auth/post/viewpost/id',{"id":id},{headers:httpHeaders});

  }
  updatePost(userDetails){
    let httpHeaders=new HttpHeaders({
      'Content-Type': 'application/json',
      'authorization': localStorage.getItem('authorization')
    })
    return this.http.post<Apimodel>('http://localhost:3000/api/auth/post/updatepost',userDetails,{headers:httpHeaders});

  }

}

