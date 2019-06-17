import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { AddPostComponent } from "./add-post/add-post.component";
import { ManagePostComponent } from "./manage-post/manage-post.component";
import { ViewPostComponent } from "./view-post/view-post.component";
import { ViewAllPostComponent } from "./view-all-post/view-all-post.component";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { EditManagePostComponent } from "./edit-manage-post/edit-manage-post.component";
import { ProfileComponent } from "./profile/profile.component";
import { HttpClientModule } from "@angular/common/http";
import { ConfirmGuardGuard } from "./guards/confirm-guard.guard";
import { AuthGuard } from "./guards/auth/auth.guard";
import { PostLoaderGuard } from "./guards/loader/post-loader.guard";
import { ViewpostLoaderGuard } from "./guards/loader/viewpost/viewpost-loader.guard";

import { from } from "rxjs";
import { ManagePostLoaderGuard } from "./guards/loader/manage-post/manage-post-loader.guard";
import { EditManagePostLoaderGuard } from './guards/loader/edit-manage-post/edit-manage-post-loader.guard';
import {BsDatepickerModule} from "ngx-bootstrap/datepicker"
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    AddPostComponent,
    ManagePostComponent,
    ViewPostComponent,
    ViewAllPostComponent,
    EditManagePostComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BsDatepickerModule.forRoot()
  ],
  providers: [
    ConfirmGuardGuard,
    AuthGuard,
    PostLoaderGuard,
    ViewpostLoaderGuard,
    ManagePostLoaderGuard,
    EditManagePostLoaderGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
