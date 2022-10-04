import { FacebookLoginProvider, GoogleLoginProvider, SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { AfterViewInit, Component, OnInit } from '@angular/core';
declare var google: any;
declare var FB: any;
declare var document: any;
declare var response: any;
@Component({
  selector: 'app-login-social-media',
  templateUrl: './login-social-media.component.html',
  styleUrls: ['./login-social-media.component.scss']
})

export class LoginSocialMediaComponent implements OnInit,AfterViewInit {
  
  user: SocialUser;
  loggedIn:boolean;
  
  constructor(
    private authService: SocialAuthService
  ) { }

  ngOnInit(): void {
  }
  ngAfterViewInit() { 
    google.accounts.id.initialize({
      client_id: "892110720425-60pd4dcp1ra35ptuugv1bcesb8p9pcse.apps.googleusercontent.com",
      callback: (response:any) => {
        console.log(response);
        localStorage.setItem("token", response.credential)
      }
    });
    google.accounts.id.renderButton(
      document.getElementById("buttonDiv"),
      { theme: "outline", size: "large" }  // customization attributes
    );
    google.accounts.id.prompt(); // also display the One Tap dialog

  }
  loginFacebook = () => {
    FB.login(function (response: any) {
      console.log('FB', response)
    }, {
      scope: 'email'
    });
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    this.authService.signOut();
  }

  refreshToken(): void {
    this.authService.refreshAuthToken(GoogleLoginProvider.PROVIDER_ID);
  }
}
