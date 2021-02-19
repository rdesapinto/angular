import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit {

  isAuth = false;

  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 2000
    );
  });

  //tableau Local qui sera alimenté à partir du tableau provenant du service
  appareils: any[] = [];

  appareilSusbcription: Subscription | undefined;
   
  


  constructor( private appareilService: AppareilService ) {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }

  //Sert à aller chercher les informations du service
  ngOnInit() {
    this.appareilSusbcription = this.appareilService.appareilSubject.subscribe(
      (appareils: any[]) => {
        this.appareils = appareils;
      }
    );
    this.appareilService.emitAppareilSubject();
  }

  onAllumer() {
    this.appareilService.switchOnAll();
}



  onEteindre() {
    if(confirm('Etes-vous sûr de vouloir éteindre tous vos appareils ?')) {
      this.appareilService.switchOffAll();
    } else {
       null;
    }
  }

}
