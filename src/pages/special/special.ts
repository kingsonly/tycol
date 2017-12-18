import { Component, OnInit} from '@angular/core';
import { NavController, AlertController, LoadingController, Loading, IonicPage } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';
import { ClasshttpService } from '../../providers/classhttp-service';

/**
 * Generated class for the SpecialPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-folderview',
  templateUrl: 'special.html',
})

export class FolderviewPage {
  folderData:any;
  loading: Loading;
  constructor(private nav: NavController, private auth: AuthService, private api:ClasshttpService, public alertCtrl: AlertController, private loadingCtrl: LoadingController) {
    this.folderData = JSON.parse(localStorage.getItem('folderData'));

  }

  public openComponent(tyc_ref:any){
    this.showLoading()

    this.api.getAll('http://localhost/tycol_main/web/api/folder/view?id='+tyc_ref).subscribe(data => {
        if(data.status === 'success'){
          localStorage.setItem('folderData', JSON.stringify(data.data));
          JSON.parse(localStorage.getItem('homePageData'));
          this.nav.push('SpecialPage');


        } else {
          this.showError('No data was fetched');
        }

      },
      error => {
        this.showError('Poor internet');
        this.nav.push('SpecialPage');
      });

    return true;
  }

  public logout() {
    this.auth.logout().subscribe(succ => {
      this.nav.setRoot('LoginPage')
    });
  }


  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...',
      dismissOnPageChange: true
    });
    this.loading.present();
    this.loading.dismiss();
  }

  showError(text) {
    this.loading.dismiss();

    let alert = this.alertCtrl.create({
      title: 'Fail',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present(prompt);
  }
}

