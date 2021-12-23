/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/no-shadow */
import { Component, OnInit } from '@angular/core';
import { LoadingController, NavController, ToastController } from '@ionic/angular';
import { CacheService } from 'ionic-cache';
import { Router } from '@angular/router';

import {ServicesService}  from  '../Services/services.service';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, filter, scan } from 'rxjs/operators';



@Component({
  selector: 'app-kaima',
  templateUrl: './kaima.page.html',
  styleUrls: ['./kaima.page.scss'],
})
export class KaimaPage implements OnInit {
  wilayat;
  baladiet;
  wilayaId  = '';
  wilayaName = '' ;
  baladiaId = '' ;
  baladiaName = '';
  baladiaNbrChaise ='';

  selectOptionWilaya = {
    title : 'قائمة الولايات',
    mode : 'md'
  };
  selectOptionBaladia = {
    title : 'قائمة البلديات',
    mode : 'md'
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
     private router: Router
  ) {}



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
      this.wilayaId =event;
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
                     if (data[i].id === this.wilayaId) {
                       this.wilayaName = data[i].nomArabe ;
                       console.log ('this.wilayaName : ' ,this.wilayaName) ;
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
      this.getListMunicipalite(this.wilayaId) ;
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
          const _url = 'http://localhost/delegation/listdelegation/' + this.wilayaId  ;
          const req = this.http.post (_url,'',httpOptions).pipe(
            map(res => res )
          ) ;
          this.baladiet.subscribe((data) => {
            loading.dismiss() ;
            if (data.length){
              // eslint-disable-next-line @typescript-eslint/prefer-for-of
                 for (let i=0 ; i<data.length ; i++){
                     if (data[i].id === this.baladiaId) {
                       this.baladiaName = data[i].nomArabe ;
                       this.baladiaNbrChaise = data[i].nbrChaise ;
                       console.log ('this.baladia : ' ,this.baladiaName) ;
                       console.log('nbrchaise', this.baladiaNbrChaise) ;
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
          this.baladiaId = event ;

      }
       // end of function

       // Function to send data from kaima pâge to dive into kaima
       openPgae(){
        console.log('this.baladianame : ', this.baladiaName) ;
        this.router.navigate(['/dive-into-kaimat'],{queryParams :{
          baladiId : this.baladiaId,
          baladiaName : this.baladiaName,
          baladiaNbrChaise : this.baladiaNbrChaise,
          wilayaName : this.wilayaName
        }});
       }
       // end of function
    }



