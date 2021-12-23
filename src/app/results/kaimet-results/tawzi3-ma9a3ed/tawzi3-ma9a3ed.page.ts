/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable @typescript-eslint/prefer-for-of */
/* eslint-disable no-underscore-dangle */
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as Chart from 'chart.js';
//import { NavController, NavParams, ToastController } from '@ionic/angular';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label ,BaseChartDirective} from 'ng2-charts';
@Component({
  selector: 'app-tawzi3-ma9a3ed',
  templateUrl: './tawzi3-ma9a3ed.page.html',
  styleUrls: ['./tawzi3-ma9a3ed.page.scss'],
})
export class Tawzi3Ma9a3edPage implements OnInit {
  kaimet: any;
  display = false;
  listA3da2 = [];
  arrayColors = [
    '76, 125, 241',
    '0, 186, 211',
    '0, 150, 137',
    '109, 45, 180',
    '255, 112, 67',
    '90, 120, 135',
    '240, 98, 146',
    '139, 195, 75',
    '158, 157, 36',
    '299, 68, 55',
    '0,117,196',
    '69,185,185',
    '208,46,104',
    '69,185,34',
    '231,23,23',
    '46,151,208',
    '218,36,128'
  ];
  doughnutColors = [
    {  backgroundColor: [
        'rgb(76, 125, 241)',
        'rgb(0, 186, 211)',
        'rgb(0, 150, 137)',
        'rgb(109, 45, 180)',
        'rgb(255, 112, 67)',
        'rgb(90, 120, 135)',
        'rgb(240, 98, 146)',
        'rgb(139, 195, 75)',
        'rgb(158, 157, 36)',
        'rgb(299, 68, 55)',
        'rgb(0,117,196)',
        'rgb(69,185,185)',
        'rgb(208,46,104)',
        'rgb(69,185,34)',
        'rgb(231,23,23)',
        'rgb(46,151,208)',
        'rgb(218,36,128)']
    }
  ];
  constructor(
    //public navctrl: NavController,
    //public navParams: NavParams,
    // private toast: ToastController,
    //private network: Network,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.display = false;
    this.kaimet = this.route.snapshot.queryParamMap.get('kaimet');
    // this.listA3da2 = [] ;
    // const _doughnutChartData =[] ;
    // this.doughnutChartLabels = [];
    // console.log('kaimetttttttttttt',this.kaimet);
    //   for(let i = 0 ; i < this.kaimet.length ; i++){
    //     _doughnutChartData.push(this.kaimet[i].list_taux);
    //     this.doughnutChartLabels.push(this.kaimet[i].list_nom);
    //     if(this.kaimet[i].list_users != null){
    //       const list = JSON.parse(this.kaimet[i].list_users);
    //       for(let j = 0; j < list.length; j++){
    //         this.listA3da2.push(list[j]);
    //       }
    //     };
    //   };
    //   console.log('this.listA3da2',this.listA3da2);
    //   this.doughnutChartData = _doughnutChartData;
    //   this.display = true;

  }
  doughnutChartLabels: Label[] = ['BMW', 'Ford', 'Tesla'];
  doughnutChartData: MultiDataSet = [
    [55, 25, 20]
  ];
  doughnutChartType: ChartType = 'doughnut';

 @ViewChild(BaseChartDirective) baseChart: BaseChartDirective;
    // Doughnut
    // public doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
    // public doughnutChartData: MultiDataSet = [
    //   [55, 25, 20]
    // ];
    // public doughnutChartType: ChartType = 'doughnut';
    // public doughnutChartOptions : Chart.ChartOptions = {
    //   legend : {
    //     display : false,
    //     position : 'bottom'
    //   },
    //   tooltips: {
    //     callbacks: {
    //       label: (tooltipItem, data,currentIndex)=> {
    //         console.log(tooltipItem,data,currentIndex);
    //         /*var dataset = data.datasets[tooltipItem.datasetIndex];
    //         var total = dataset.data.reduce(function(previousValue, currentValue, currentIndex, array) {
    //           return previousValue + currentValue;
    //         });
    //         var currentValue = dataset.data[tooltipItem.index];
    //         var precentage = Math.floor(((currentValue/total) * 100)+0.5);*/
    //         const index = tooltipItem.index;
    //         const dfsdf = data.datasets[0].data[index];
    //         const dfssdfsddf = data.labels[index];
    //         return dfssdfsddf +' : '+ dfsdf + '%';
    //       }
    //     }
    //   }
    // };
    //!event
    public chartClicked(e: any): void {
      console.log(e);
    }
    public chartHovered(e: any): void {
      console.log(e);
    }

}
