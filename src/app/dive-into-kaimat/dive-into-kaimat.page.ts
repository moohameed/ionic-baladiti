import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, LoadingController, NavController, ToastController } from '@ionic/angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, filter, scan } from 'rxjs/operators';
import { CacheService } from 'ionic-cache';
import { NavigationExtras } from '@angular/router';
@Component({
  selector: 'app-dive-into-kaimat',
  templateUrl: './dive-into-kaimat.page.html',
  styleUrls: ['./dive-into-kaimat.page.scss'],
})
export class DiveIntoKaimatPage implements OnInit {
  // changed
  kaima ;
  etatLists = false ;
  baladiId = '' ;
  kaimaId = '' ;
  numberOfKaima = 0;
  wilayaName = '';
  baladiaName = '' ;
  baladiaNbrChaise = '' ;
  type ;


  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router,
    public loadingCtrl: LoadingController,
    private cache: CacheService,
    private alert: AlertController,
    private toast: ToastController,
    private navCtrl: NavController
  ) {}

  ngOnInit() {
    // Data recupered from the function openPgae() from kaima page
    this.baladiId= this.route.snapshot.queryParamMap.get('baladiId');
    this.baladiaName= this.route.snapshot.queryParamMap.get('baladiaName');
    this.baladiaNbrChaise= this.route.snapshot.queryParamMap.get('baladiaNbrChaise');
    this.wilayaName=  this.route.snapshot.queryParamMap.get('wilayaName');
    this.getList(this.baladiId,'0') ;
    console.log(this.wilayaName) ;
    // end of data recuperation
  }
  // Function when changing the value of typeId
  onChange(value){
    console.log(value) ;
    this.getList(this.baladiId,value);
  }
  // end ofFunction
  // Functio to get list of kaimat
  async getList(baladiId,typeID){
    const   loading = await this.loadingCtrl.create({
      message : 'please wait'
  }) ;
  loading.present();
  const httpOptions = {
        headers : new HttpHeaders({})
  } ;
  // eslint-disable-next-line no-underscore-dangle
  const _url = 'http://localhost/lists/listsws/'+baladiId+'/'+typeID;
  const req = this.http.post (_url,'',httpOptions).pipe(
    map(res => res )
  ) ;
  this.kaima = this.cache.loadFromDelayedObservable(_url,req,'list') ;
  this.kaima.subscribe(async (res) => {
    this.numberOfKaima = res.length ;
    if (res.length){
      loading.dismiss();
      this.etatLists = true ;
    }else {
      loading.dismiss();
      this.etatLists = true ;
      const alert =this.alert.create({
        message : 'no kaima',
        buttons : ['ok']
      });
      (await alert).present();
    }
  } , async error =>{
    loading.dismiss() ;
    (await this.toast.create({
      message: 'verifier votre connexion internet',
      duration: 2000
    })).present() ;
  }
  );

  }
  // end of function
 async goToDetail(item){
    //   await this.storage.set('myItem', item);
    //   await this.navCtrl.navigateForward(['/detail']);
    // this.router.navigate(['/detail'],{queryParams : {
    //   item
    // }});
    const navigationExtras: NavigationExtras = {
      queryParams: {
        item: JSON.stringify(item),
        refresh: 'refresh'
      }
  };
  this.navCtrl.navigateForward(['/detail'], navigationExtras);
  }
}
