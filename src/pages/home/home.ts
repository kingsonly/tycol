import { Component, OnInit} from '@angular/core';
import { NavController, AlertController, LoadingController, Loading, IonicPage } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';
import { ClasshttpService } from '../../providers/classhttp-service';


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  username = '';
  email = '';
  homedata:any;
  loading: Loading;
  constructor(private nav: NavController, private auth: AuthService, private api:ClasshttpService, public alertCtrl: AlertController, private loadingCtrl: LoadingController) {
    let info =  JSON.parse(localStorage.getItem('currentUser'));//this.auth.getUserInfo();
    this.username = info.data.username;// info['name'];
    this.email = info.data.token;//info['email'];
    this.homedata = JSON.parse(localStorage.getItem('homePageData'));

  }

  ngOnInit() {
    this.getAllFolder();
  }

  public getAllFolder() {
    this.showLoading();
    this.api.getAll('http://172.20.10.3/tycol_main/web/api/folder').subscribe(data => {
      if(data.status === 'success'){
        localStorage.setItem('homePageData', JSON.stringify(data.data));
        let apiData = JSON.parse(localStorage.getItem('homePageData'));
        this.homedata = apiData;

      } else {
        this.showError('No data was fetched');
      }

      },
      error => {
        //this.showError('Poor internet');
      });
  }

  public openFolder(tyc_ref:any){
    this.showLoading()

    this.api.getAll('http://172.20.10.3/tycol_main/web/api/folder/view?id='+tyc_ref).subscribe(data => {
        if(data.status === 'success'){
          localStorage.setItem('folderData', JSON.stringify(data.data));
          this.nav.push('FolderviewPage');


        } else {
          this.showError('No data was fetched');

        }

      },
      error => {
        this.showError('Poor internet');

      });


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

