/* eslint-disable @typescript-eslint/naming-convention */
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, LoadingController, NavController, NavParams, ToastController } from '@ionic/angular';
import { CacheService } from 'ionic-cache';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-kaimet-results',
  templateUrl: './kaimet-results.page.html',
  styleUrls: ['./kaimet-results.page.scss'],
})
export class KaimetResultsPage implements OnInit {
  kaimet: Observable<any> ;
  etatLists = false;
  baladiaID = '';
  kaima_id = '';
  numberOfKaima = 0;
  WilayaName = '';
  baladiaName = '';
  baladiaNbrChaise = '';
  tauxParticipation = '15';
  nbrInscrits = '';
  nbrVotesAnnules = '';
  nbrVotesBlancs = '';
  nbrTotalsDeVotes = '';
  type = '';

  constructor(
              public navCtrl: NavController,
              public alertCtrl: AlertController,
              //public navParams: NavParams,
              private cache: CacheService,
              private toast: ToastController,
              //private network: Network,
              public loadingCtrl: LoadingController,
              private http: HttpClient,
              private router: Router,
              private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.baladiaID= this.route.snapshot.queryParamMap.get('baladiaID');
    this.WilayaName= this.route.snapshot.queryParamMap.get('WilayaName');
    this.baladiaName= this.route.snapshot.queryParamMap.get('baladiaName');
    this.baladiaNbrChaise= this.route.snapshot.queryParamMap.get('baladiaNbrChaise');
    console.log();
    if (this.route.snapshot.queryParamMap.get('tauxParticipation') == null) {
      this.tauxParticipation = '0';
    }else{
      this.tauxParticipation = this.route.snapshot.queryParamMap.get('tauxParticipation');
    }
    if (this.route.snapshot.queryParamMap.get('nbrInscrits') == null) {
      this.nbrInscrits = '0';
    }else{
      this.nbrInscrits = this.route.snapshot.queryParamMap.get('nbrInscrits');
    }
    if (this.route.snapshot.queryParamMap.get('nbrVotesAnnules') == null) {
      this.nbrVotesAnnules = '0';
    }else{
      this.nbrVotesAnnules = this.route.snapshot.queryParamMap.get('nbrVotesAnnules');
    }
    if (this.route.snapshot.queryParamMap.get('nbrVotesBlancs') == null) {
      this.nbrVotesBlancs = '0';
    }else{
      this.nbrVotesBlancs =  this.route.snapshot.queryParamMap.get('nbrVotesBlancs');
    }
    console.log(this.nbrVotesBlancs ) ;
    if (this.route.snapshot.queryParamMap.get('nbrTotalsDeVotes') == null) {
      this.nbrTotalsDeVotes = '0';
    }else{
      this.nbrTotalsDeVotes = this.route.snapshot.queryParamMap.get('nbrTotalsDeVotes');
    }
    this.getList(this.baladiaID,'0') ;
  }

  onChange(value){
    console.log(value) ;
    this.getList(this.baladiaID,value);
  }
    // Functio to get list of kaimat

    async getList(baladiaID,typeID ){
      const   loading = await this.loadingCtrl.create({
        message : 'please wait'
    }) ;
    loading.present();
    const httpOptions = {
          headers : new HttpHeaders({})
    } ;
    // eslint-disable-next-line no-underscore-dangle
    const _url = 'http://localhost/lists/reslistsws/'+baladiaID+'/'+typeID;
    const req = this.http.post (_url,'',httpOptions).pipe(
      //map(res => res )
      map((res: any[]) => {
        let array = [];
        array = res;
        array.sort(this.compare);
        console.log('array:',array);
        return array;
      })
    ) ;
    this.kaimet = this.cache.loadFromDelayedObservable(_url,req,'list') ;
    this.kaimet.subscribe(async (res) => {
      this.numberOfKaima = res.length ;
      if (res.length){
        loading.dismiss();
        this.etatLists = true ;
      }else {
        loading.dismiss();
        this.etatLists = true ;
        const alert =this.alertCtrl.create({
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
    compare(a,b) {
      if (Number(b.list_taux) < Number(a.list_taux))
        {return -1;}
      if (Number(b.list_taux) > Number(a.list_taux))
        {return 1;}
      return 0;
    }
    compareForTawzi3(a,b) {
      if (Number(b.list_taux) < Number(a.list_taux))
        {return -1;}
      if (Number(b.list_taux) > Number(a.list_taux))
        {return 1;}
      return 0;
    }

    GoToTawziiPage(){
      console.log('come on') ;
      let array = [] ;
      this.kaimet.subscribe((res: any[])=>{
        array = res;
        array.sort(this.compareForTawzi3);
        this.router.navigate(['tawzi3-ma9a3ed'],{queryParams :{
          kaimet : array
        }});
      });
    }

    GoToattafasil(){
      console.log('here') ;
      this.router.navigate(['attafasil'],{queryParams :{

      baladiaNbrChaise: this.baladiaNbrChaise,
      numberOfKaima : this.numberOfKaima,
      tauxParticipation : this.tauxParticipation,
      nbrInscrits : this.nbrInscrits,
      nbrVotesAnnules : this.nbrVotesAnnules,
      nbrVotesBlancs : this.nbrVotesBlancs,
      nbrTotalsDeVotes : this.nbrTotalsDeVotes
      }});

    }
    GoToDetail(Kaima){
      console.log(Kaima);

      this.router.navigate(['tafasxi'],{queryParams :{
        kaima : Kaima
      }});
    }

}

// je suis en train de corriger getList
