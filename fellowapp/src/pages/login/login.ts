import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { Facebook } from '@ionic-native/facebook';

import { MainPage } from '../../pages/pages';

//import { User } from '../../providers/user';

import { TranslateService } from '@ngx-translate/core';
import { FacebookAuth, User, AuthLoginResult} from '@ionic/cloud-angular';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  // The account fields for the login form.
  // If you're using the username field with or without email, make
  // sure to add it to the type
  account: { email: string, password: string } = {
    email: 'test@example.com',
    password: 'test'
  };

  // Our translated text strings
  private loginErrorString: string;
  loginDetails: AuthLoginResult;

  constructor(
    public fb: Facebook,
    private user: User, 
    private facebook: FacebookAuth,
    public navCtrl: NavController,
    public toastCtrl: ToastController,
    public translateService: TranslateService) {

    this.translateService.get('LOGIN_ERROR').subscribe((value) => {
      this.loginErrorString = value;
    })
  }

  alogin()
  {
      this.fb.login(['email']).then((response) => {
            alert('Logged in');
            alert(JSON.stringify(response.authResponse));
        }, (error) => {
            alert(error);
        })
  }

  // Attempt to login in through our User service
  async doLogin(): Promise<void>  {
    try{
        const token = await this.facebook.getToken();
        if (token)
        {
            this.navCtrl.setRoot(MainPage);
        }
        else
        {
            this.loginDetails = await this.facebook.login();
            if(this.loginDetails.token)
            {
                await this.facebook.storeToken(this.loginDetails.token);
                this.navCtrl.setRoot(MainPage);
            }
        }
        /*
        this.loginDetails = await this.facebook.login();
        console.log(this.loginDetails);
        console.log(this.user.social.facebook);
        await this.facebook.storeToken(this.loginDetails.token);
        cons token = await this.facebook.getToken();
        console.log(token);
        */
    }catch (e){
      console.error(e);
    }
    
    
    //this.navCtrl.setRoot(MainPage);
    
    /*
    this.user.login(this.account).subscribe((resp) => {
      this.navCtrl.push(MainPage);
    }, (err) => {
      this.navCtrl.push(MainPage);
      // Unable to log in
      let toast = this.toastCtrl.create({
        message: this.loginErrorString,
        duration: 3000,
        position: 'top'
      });
      toast.present();
    });*/
  }
}
