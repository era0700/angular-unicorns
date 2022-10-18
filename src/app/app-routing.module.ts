import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component'
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { UserPostsComponent } from './user-posts/user-posts.component';
import { CreatePostsComponent } from './create-posts/create-posts.component';

const routes: Routes = [
    {
        path: '',
        component: LandingPageComponent,
    },
    {
        path: 'user',
        component: UserPostsComponent,
    },
    {
        path: 'login',
        component: LoginFormComponent,
    },
    {
        path: 'register',
        component: RegisterFormComponent,
    },
    {
        path: 'create-post',
        component: CreatePostsComponent,

    }

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
})
export class AppRoutingModule { }
