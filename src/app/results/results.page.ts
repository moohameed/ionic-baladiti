/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { LoadingController, NavController, ToastController } from '@ionic/angular';
import { CacheService } from 'ionic-cache';
import { ServicesService } from '../Services/services.service';
import { map, filter, scan } from 'rxjs/operators';

@Component({
  selector: 'app-results',
  templateUrl: './results.page.html',
  styleUrls: ['./results.page.scss'],
})
export class ResultsPage implements OnInit {
  wilayat;
  baladiet;
  WilayaId = '';
  WilayaName = '';
  baladiaID = '';
  baladiaName = '';
  baladiaNbrChaise = '';
  tauxParticipation = '';
  nbrInscrits = '';
  nbrVotesAnnules = '';
  nbrVotesBlancs = '';
  nbrTotalsDeVotes = '';
  selectOptionsWilaya = {
    title: 'قائمة الولايات',
    mode: 'md'
  };
  selectOptionsBaladia = {
    title: 'قائمة البلديات',
    mode: 'md'
  };
  wilayaSelectionner = '';
  baladiaSelectionner = '';

  constructor(
    public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    private toast: ToastController,
    private services: ServicesService,
    private http: HttpClient,
    private cache: CacheService,
    private router: Router,
    public route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getListGouvernorats() ;
  }
        // Function to get list des gouvernorats :
        async getListGouvernorats()
        {
            const   loading = await this.loadingCtrl.create({
            message : 'please wait'
                             }) ;
        loading.present();
        const httpOptions = {
                headers : new HttpHeaders({})
          } ;
          const _url = 'http://localhost/gouvernorat/listgouvernoratws' ;
          const req = this.http.post(_url , '' ,httpOptions).pipe(
            map (res =>res )

          );
          this.wilayat = this.cache.loadFromObservable(_url ,req,'wileyet');
          this.wilayat.subscribe(
            (res) =>{
              if (res.length){
                loading.dismiss() ;
              }else {

              }
            },async error =>{
              loading.dismiss() ;
               (await this.toast.create({
                message: 'verifier votre connexion internet',
                duration: 2000
              })).present();
            }
          );

        }
        // End of function
          // Function to get les des municipalite
      async getListMunicipalite(id){
        const   loading = await this.loadingCtrl.create({
          message : 'please wait'
      }) ;
      loading.present();
      const httpOptions = {
            headers : new HttpHeaders({})
      } ;
      const _url = 'http://localhost/delegation/listdelegationsws/' + id ;
      const req = this.http.post(_url , '' ,httpOptions).pipe(
        map (res =>res )
      );
      this.baladiet = this.cache.loadFromObservable(_url ,req,'baladia');
      this.baladiet.subscribe(
        (res) => {
          if (res.length){
            loading.dismiss() ;
          }else {

          }
        },async error => {
          loading.dismiss() ;
          (await this.toast.create({
            message: 'verifier votre connexion internet',
            duration: 2000
          })).present() ;
        }
      );
      }
      // end of function

            // Function to list wilaya change
            async onListwilayaChange(event ){
              const   loading = await this.loadingCtrl.create({
              message : 'please wait'
              }) ;
              loading.present();
              this.baladiaSelectionner = '' ;
              console.log ('wileya : ', event ) ;
              this.WilayaId =event;
              const httpOptions = {
                headers : new HttpHeaders({})
              } ;
              const _url = 'http://localhost/gouvernorat/listgouvernoratws'  ;
              const req = this.http.post(_url , '' ,httpOptions).pipe(
                map (res =>res )
              );
              this.wilayat = this.cache.loadFromObservable(_url,req,'wilayet') ;
              this.wilayat.subscribe((data) => {
                loading.dismiss() ;
                if (data.length){
                      // eslint-disable-next-line @typescript-eslint/prefer-for-of
                         for (let i=0 ; i<data.length ; i++){
                             if (data[i].id === this.WilayaId) {
                               this.WilayaName = data[i].nomArabe ;
                               console.log ('this.wilayaName : ' ,this.WilayaName) ;
                             }
                         }
                      }

              },async error => {
                loading.dismiss() ;
                (await this.toast.create({
                  message: 'verifier votre connexion internet',
                  duration: 2000
                })).present();
              }
              );
              this.getListMunicipalite(this.WilayaId) ;
              }
              // end of function
                    // Function to list baladia change
      async onListBaladiaChange(event) {
        const   loading = await this.loadingCtrl.create({
          message : 'please wait'
          }) ;
          loading.present();
          console.log('baladia : ', event) ;
          const httpOptions = {
            headers : new HttpHeaders({})
          } ;
          const _url = 'http://localhost/delegation/listdelegation/' + this.WilayaId  ;
          const req = this.http.post (_url,'',httpOptions).pipe(
            map(res => res )
          ) ;
          this.baladiet.subscribe((data) => {
            loading.dismiss() ;
            if (data.length){
              // eslint-disable-next-line @typescript-eslint/prefer-for-of
                 for (let i=0 ; i<data.length ; i++){
                     if (data[i].id === this.baladiaID) {
                      console.log('data baladia:', data[i]);
                      this.baladiaName = data[i].nomArabe;
                      console.log('data[i]:', data[i]);
                      this.baladiaNbrChaise = data[i].nbrChaise;
                      this.tauxParticipation = data[i].tauxParticipation;
                      this.nbrInscrits = data[i].nbrInscrits;
                      this.nbrVotesAnnules = data[i].nbrVotesAnnules;
                      this.nbrVotesBlancs = data[i].nbrVotesBlancs;
                      this.nbrTotalsDeVotes = data[i].voters;
                     }
                 }
              }

          },async error => {
            loading.dismiss();
            (await this.toast.create({
              message: 'verifier votre connextion internet',
              duration: 2000
            })).present();
          }
          );
          this.baladiaID = event ;
      }
       // end of function
       openPgae(){
         //tauxParticipation
     console.log('data baladia:', this.nbrVotesBlancs);
     console.log('taux' , this.tauxParticipation);
     //this.router.navigate(['/results/kaimet-results'],{queryParams :{
     this.router.navigate(['/results/kaimet-results'],{queryParams :{
      baladiaID: this.baladiaID,
      baladiaName: this.baladiaName,
      baladiaNbrChaise: this.baladiaNbrChaise,
      WilayaName: this.WilayaName,
      nbrInscrits : this.nbrInscrits,
      nbrVotesAnnules : this.nbrVotesAnnules,
      nbrVotesBlancs : this.nbrVotesBlancs,
      tauxParticipation : this.tauxParticipation,
      nbrTotalsDeVotes : this.nbrTotalsDeVotes
    }});
       }
}
