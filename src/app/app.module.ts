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
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
