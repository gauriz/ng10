import { Component, OnInit } from '@angular/core';
import { SocialAuthService } from 'angularx-social-login';
import { FacebookLoginProvider, GoogleLoginProvider, AmazonLoginProvider } from 'angularx-social-login';
import { SocialUser } from "angularx-social-login";
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { MatDialogRef } from '@angular/material/dialog';
const googleLogoURL = 'https://raw.githubusercontent.com/fireflysemantics/logo/master/Google.svg';
const facebookLogoURL = 'https://cdn.worldvectorlogo.com/logos/facebook-3.svg';
const AmazonLogoURL = 'https://cdn.worldvectorlogo.com/logos/amazon-icon.svg';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email;
  password;
  fullName;
  user: SocialUser;
  loggedIn: boolean;
  constructor(private authService: SocialAuthService, private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer,
    public dialogRef: MatDialogRef<LoginComponent>) {
    this.matIconRegistry.addSvgIcon(
      'google',
      this.domSanitizer.bypassSecurityTrustResourceUrl(googleLogoURL));
    this.matIconRegistry.addSvgIcon(
      'facebook',
      this.domSanitizer.bypassSecurityTrustResourceUrl(facebookLogoURL));
    this.matIconRegistry.addSvgIcon(
      'amazon',
      this.domSanitizer.bypassSecurityTrustResourceUrl(AmazonLogoURL));
  }

  ngOnInit(): void {
    console.log(this.loggedIn);
    this.authService.initState.subscribe((init) => {
      console.log(init);
    });
    if (this.loggedIn) {
      this.user = new SocialUser();
      this.user.provider = localStorage.getItem('provider');
      this.user.email = localStorage.getItem('email');
      this.user.name = localStorage.getItem('name');
      this.user.photoUrl = localStorage.getItem('photoUrl');
      this.user.firstName = localStorage.getItem('firstName');
      this.user.lastName = localStorage.getItem('lastName');
      this.user.authToken = localStorage.getItem('authToken');
    }
  }

  async signInWithGoogle(): Promise<void> {
    try {
      const googleSignIn = await this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
      if (googleSignIn.provider === 'GOOGLE') {
        localStorage.setItem('loggedIn', '1');
        localStorage.setItem('name', googleSignIn.name);
        localStorage.setItem('photoUrl', googleSignIn.photoUrl);
        localStorage.setItem('email', googleSignIn.email);
        localStorage.setItem('firstName', googleSignIn.firstName);
        localStorage.setItem('lastName', googleSignIn.lastName);
        localStorage.setItem('authToken', googleSignIn.authToken);
        localStorage.setItem('provider', googleSignIn.provider);
        this.dialogRef.close(true);
      }
    } catch (error) {
      console.log(error);
    }
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  signInWithAmazon(): void {
    this.authService.signIn(AmazonLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    localStorage.setItem('loggedIn', '0');
    localStorage.removeItem('provider');
    localStorage.removeItem('email');
    localStorage.removeItem('name');
    localStorage.removeItem('photoUrl');
    localStorage.removeItem('firstName');
    localStorage.removeItem('lastName');
    localStorage.removeItem('authToken');
    this.dialogRef.close();
  }
}
