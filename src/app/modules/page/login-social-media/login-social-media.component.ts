import { Component, OnInit } from '@angular/core';
declare var google:any;
declare var handleCredentialResponse:any;
@Component({
  selector: 'app-login-social-media',
  templateUrl: './login-social-media.component.html',
  styleUrls: ['./login-social-media.component.scss']
})

export class LoginSocialMediaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.onload = function () {
      google.accounts.id.initialize({
        client_id: "892110720425-60pd4dcp1ra35ptuugv1bcesb8p9pcse.apps.googleusercontent.com",
        callback: handleCredentialResponse
      });
      google.accounts.id.renderButton(
        document.getElementById("buttonDiv"),
        { theme: "outline", size: "large" }  // customization attributes
      );
      google.accounts.id.prompt(); // also display the One Tap dialog
    }
  }
  handleCredentialResponse(response: { credential: string; }) {
    console.log("Encoded JWT ID token: " + response.credential);
  }
  
}
