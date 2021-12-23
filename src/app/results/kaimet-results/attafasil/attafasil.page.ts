import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';


@Component({
  selector: 'app-attafasil',
  templateUrl: './attafasil.page.html',
  styleUrls: ['./attafasil.page.scss'],
})
export class AttafasilPage implements OnInit {
  baladiaNbrChaise: string;
  numberOfKaima: string;
  tauxParticipation: string;
  nbrInscrits: string;
  nbrVotesAnnules: string;
  nbrVotesBlancs: string;
  nbrTotalsDeVotes: string;
  nbVotesAcceptes: number;
  constructor(
   // public navCtrl: NavController,
    public alertCtrl: AlertController,
    //public navParams: NavParams,
   // private cache: CacheService,
    private toast: ToastController,
    //private network: Network,
    public loadingCtrl: LoadingController,
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    if (this.route.snapshot.queryParamMap.get('baladiaNbrChaise') == null) {
      this.baladiaNbrChaise = '0';
    }else{
      this.baladiaNbrChaise = this.route.snapshot.queryParamMap.get('baladiaNbrChaise');
    }
    if (this.route.snapshot.queryParamMap.get('numberOfKaima') == null) {
      this.numberOfKaima = '0';
    }else{
      this.numberOfKaima = this.route.snapshot.queryParamMap.get('numberOfKaima');
    }
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
      this.nbrVotesBlancs = this.route.snapshot.queryParamMap.get('nbrVotesBlancs');
    }
    if (this.route.snapshot.queryParamMap.get('nbrTotalsDeVotes') == null) {
      this.nbrTotalsDeVotes = '0';
    }else{
      this.nbrTotalsDeVotes = this.route.snapshot.queryParamMap.get('nbrTotalsDeVotes');
    }
  }

}
