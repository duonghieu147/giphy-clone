import { Component, OnInit } from '@angular/core';
declare var google:any;
declare var FB:any;
declare var document:any;
declare var response:any;
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


//     window.fbAsyncInit = function() {
//       FB.init({
//         appId      : '1479265649212023',
//         cookie     : true,
//         xfbml      : true,
//         version    : 'v15'
//       });
        
//       FB.AppEvents.logPageView();   
        
//     };
  
//     (function(d, s, id){
//        var js, fjs = d.getElementsByTagName(s)[0];
//        if (d.getElementById(id)) {return;}
//        js = d.createElement(s); js.id = id;
//        js.src = "https://connect.facebook.net/en_US/sdk.js";
//        fjs.parentNode.insertBefore(js, fjs);
//      }(document, 'script', 'facebook-jssdk'));
// }
//   FB.getLoginStatus(function(response) {
//     statusChangeCallback(response);
//   });
 }
loginFacebook = () => {
  FB.login(function (response:any) {
    console.log('FB',response)
  }, {
    scope: 'email'
  });
}
}
function handleCredentialResponse(response: { credential: string; }) {
  console.log("Encoded JWT ID token: " + response);
  console.log("Encoded JWT ID token: " + response.credential);
  return  response.credential
}

// function statusChangeCallback(response :any) {  // Called with the results from FB.getLoginStatus().
//   console.log('statusChangeCallback');
//   console.log(response);                   // The current login status of the person.
//   if (response.status === 'connected') {   // Logged into your webpage and Facebook.
//     testAPI();  
//   } else {                                 // Not logged into your webpage or we are unable to tell.
//     document.getElementById('status').innerHTML = 'Please log ' +
//       'into this webpage.';
//   }
// }


// function checkLoginState() {               // Called when a person is finished with the Login Button.
//   FB.getLoginStatus(function(response:any) {   // See the onlogin handler
//     statusChangeCallback(response);
//   });
// }

// function testAPI() {                      // Testing Graph API after login.  See statusChangeCallback() for when this call is made.
//   console.log('Welcome!  Fetching your information.... ');
//   FB.api('/me', function(response:any) {
//     console.log('Successful login for: ' + response.name);
//     document.getElementById('status').innerHTML =
//       'Thanks for logging in, ' + response.name + '!';
//   });
// }
