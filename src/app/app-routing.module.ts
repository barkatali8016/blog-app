import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { AddPostComponent } from "./add-post/add-post.component";
import { ManagePostComponent } from "./manage-post/manage-post.component";
import { ViewPostComponent } from "./view-post/view-post.component";
import { ViewAllPostComponent } from "./view-all-post/view-all-post.component";
import { EditManagePostComponent } from "./edit-manage-post/edit-manage-post.component";
import { ProfileComponent } from "./profile/profile.component";
import {ConfirmGuardGuard} from "./guards/confirm-guard.guard"
import {AuthGuard} from "./guards/auth/auth.guard"
import { PostLoaderGuard } from './guards/loader/post-loader.guard';
import { ViewpostLoaderGuard } from './guards/loader/viewpost/viewpost-loader.guard';
import { ManagePostLoaderGuard } from './guards/loader/manage-post/manage-post-loader.guard';
import { EditManagePostLoaderGuard } from './guards/loader/edit-manage-post/edit-manage-post-loader.guard';

const routes: Routes = [
  { path: "", redirectTo: "/login", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  {
    path: "register",
    component: RegisterComponent,
    canDeactivate: [ConfirmGuardGuard]
  },
  {
    path: "dashboard",
    component: DashboardComponent,
    canActivate:[AuthGuard],
    children: [
      { path: "profile", component: ProfileComponent,resolve:{postView:PostLoaderGuard} },
      { path: "addpost", component: AddPostComponent },
      {
        path: "managepost",
        component: ManagePostComponent,resolve:{managePost:ManagePostLoaderGuard}
        //children: [{ path: 'editmanagepost', component: EditManagePostComponent }]
      },
      { path: "editmanagepost/:id", component: EditManagePostComponent,resolve:{editmanagepost:EditManagePostLoaderGuard} },
      { path: "viewpost", component: ViewPostComponent,resolve:{userpostView:ViewpostLoaderGuard} },
      { path: "viewallpost", component: ViewAllPostComponent,
      resolve:{postView:PostLoaderGuard}
    }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
