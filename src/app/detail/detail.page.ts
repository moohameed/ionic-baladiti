/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController, NavController, NavParams, ToastController } from '@ionic/angular';
import { ModalKaimaPage } from './modal-kaima/modal-kaima.page';


interface kaimat{

  list_id: string;
  list_nom: string;
  list_tete: string;
  list_num: string;
  list_image: string;
  list_logo: string;
  list_imageGroup: string;
  list_type: string;
  list_valide: string;
  list_dateValide: string;
  list_userValide: string;
  list_publie: string;
  list_datePublie: string;
  list_userPublie: string;
  list_deate_creation: string;
  list_userCreate: string;
  list_idDelegation: string;
  nomDelegation: string;
  nomArabeDelegation: string;
}
@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
   Kaima: kaimat;
   refresh;
  constructor(
               private route: ActivatedRoute,
              public navCtrl: NavController,
             // public navParams: NavParams,
              private toast: ToastController,
              public modalCtrl: ModalController,
              //private storage: Storage
  ) { }

  ngOnInit() {

    // console.log(this.route.snapshot.queryParamMap.get('item')) ;
    //this.Kaima = this.storage.getItem('item')
    this.route.queryParams.subscribe(params => {
      this.refresh = params.refresh;
      this.Kaima = JSON.parse(params.item);
  });
  console.log(this.Kaima);


  }
  openModelKaima(image,valide,publie){
    const modal = this.modalCtrl.create({

     component : ModalKaimaPage

    });
  }
  openModelBayen(image,valide,publie){

  }

}
