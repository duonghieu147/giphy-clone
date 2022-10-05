import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './modules/page/home/home.component';
import { DetailGiphyComponent } from './modules/page/detail-giphy/detail-giphy.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './shared/components/footer/footer.component';
import { ItemGifComponent } from './shared/components/item-gif/item-gif.component';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './shared/components/search/search.component';
import { DashboardComponent } from './modules/page/dashboard/dashboard.component';
import { BankCardComponent } from './shared/components/bank-card/bank-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material.module';
import { LoginSocialMediaComponent } from './modules/page/login-social-media/login-social-media.component';
import { FacebookLoginProvider, GoogleLoginProvider, SocialAuthServiceConfig, SocialLoginModule } from '@abacritt/angularx-social-login';
import { MyTubeComponent } from './modules/page/my-tube/my-tube.component';
import { SideNavComponent } from './shared/components/side-nav/side-nav.component';
import { YouTubePlayerModule } from '@angular/youtube-player';

import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { SignInComponent } from './modules/page/login/sign-in/sign-in.component';
import { SignUpComponent } from './modules/page/login/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './modules/page/login/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './modules/page/login/verify-email/verify-email.component';
import { AuthService } from './shared/services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailGiphyComponent,
    FooterComponent,
    ItemGifComponent,
    SearchComponent,
    DashboardComponent,
    BankCardComponent,
    LoginSocialMediaComponent,
    MyTubeComponent,
    SideNavComponent,
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    BrowserAnimationsModule,
    MaterialModule,
    SocialLoginModule,
    YouTubePlayerModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
  ],
  providers: 
  [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '892110720425-60pd4dcp1ra35ptuugv1bcesb8p9pcse.apps.googleusercontent.com'
            )
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('1479265649212023')
          }
        ],
        onError: (err) => {
          console.error(err);
        }
      } as SocialAuthServiceConfig
    },
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
