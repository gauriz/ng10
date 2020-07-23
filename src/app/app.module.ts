import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { HomeComponent } from './components/home/home.component';
import { MaterialModule } from './common/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ProfileComponent } from './components/profile/profile.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { CartComponent } from './components/cart/cart.component';
import { NguCarouselModule } from '@ngu/carousel';
import 'hammerjs';
import { CarouselComponent } from './components/home/carousel/carousel.component';
import { LoginComponent } from './components/login/login.component';
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import {
  GoogleLoginProvider,
  FacebookLoginProvider,
  AmazonLoginProvider,
} from 'angularx-social-login';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    HomeComponent,
    ProfileComponent,
    WishlistComponent,
    CartComponent,
    CarouselComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    NguCarouselModule,
    SocialLoginModule,
    HttpClientModule 
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '77711633392-i3etqmbk06mp8d0dq825nrpv09egij4b.apps.googleusercontent.com'
            ),
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('310945350314663'),
          },
          {
            id: AmazonLoginProvider.PROVIDER_ID,
            provider: new AmazonLoginProvider(
              'amzn1.application-oa2-client.3661e0d3a4a84b62a87b4200a89c4607'
            ),
          },
        ],
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
