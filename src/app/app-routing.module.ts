import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './modules/page/dashboard/dashboard.component';
import { DetailGiphyComponent } from './modules/page/detail-giphy/detail-giphy.component';
import { HomeComponent } from './modules/page/home/home.component';
import { LoginSocialMediaComponent } from './modules/page/login-social-media/login-social-media.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'gifs', component: HomeComponent },
  { path: 'gifs/:id', component: DetailGiphyComponent },
  { path: 'login', component: LoginSocialMediaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
