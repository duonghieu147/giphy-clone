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
    LoginSocialMediaComponent
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
    SocialLoginModule
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
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
