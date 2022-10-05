import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './modules/page/dashboard/dashboard.component';
import { DetailGiphyComponent } from './modules/page/detail-giphy/detail-giphy.component';
import { HomeComponent } from './modules/page/home/home.component';
import { LoginSocialMediaComponent } from './modules/page/login-social-media/login-social-media.component';
import { ForgotPasswordComponent } from './modules/page/login/forgot-password/forgot-password.component';
import { SignInComponent } from './modules/page/login/sign-in/sign-in.component';
import { SignUpComponent } from './modules/page/login/sign-up/sign-up.component';
import { VerifyEmailComponent } from './modules/page/login/verify-email/verify-email.component';
import { MyTubeComponent } from './modules/page/my-tube/my-tube.component';
import { SideNavComponent } from './shared/components/side-nav/side-nav.component';
import { AuthGuard } from './shared/guard/auth.guard';
const routes: Routes = [

  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  { path: 'sign-in', component: SignInComponent },
  { path: 'register-user', component: SignUpComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'verify-email-address', component: VerifyEmailComponent },
  // { path: '', component: DashboardComponent },
  { path: 'gifs', component: HomeComponent },
  { path: 'gifs/:id', component: DetailGiphyComponent },
  { path: 'login', component: LoginSocialMediaComponent },
  { path: 'my-tube', component: MyTubeComponent },
  { path: 'side-nav', component: SideNavComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
