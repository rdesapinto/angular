import { Subject } from "rxjs";

export class AppareilService {

    
    appareilSubject = new Subject <any[]>(); 

    private appareils = [
        {
          id:1,
          name: "machine à laver",
          status: "éteint"
        }, 
        {
          id:2,
          name: "Frigo",
          status: "allumé"
        },
        {
          id:3,
          name: "ordinateur",
          status: "allumé"
        },
        
      ];


      //Cette méthode permet à se que le subject émette la liste aux appareils
      ////Pour pouvoir y acceder depuis l'exterieru
      emitAppareilSubject(){
        this.appareilSubject.next(this.appareils.slice()); //.Slice pour emmetre une copie de cette array
      }

      getAppareilById(id: number) {
        const appareil = this.appareils.find(
          (s) => {
            return s.id === id;
          }
        );
        return appareil;
    }

    switchOnAll() {
        for(let appareil of this.appareils) {
            appareil.status = 'allumé';
        }
        this.emitAppareilSubject(); //Sert a émettre le subject pour que les component souscris à ce subject verront les changement automatiquement
    }
    
    switchOffAll() {
        for(let appareil of this.appareils) {
          appareil.status = 'éteint';
        }
        this.emitAppareilSubject(); //Sert a émettre le subject pour que les component souscris à ce subject verront les changement automatiquement

    }

    switchOnOne(index: number) {
        this.appareils[index].status = 'allumé';
        this.emitAppareilSubject(); //Sert a émettre le subject pour que les component souscris à ce subject verront les changement automatiquement

    }
    
    switchOffOne(index: number) {
        this.appareils[index].status = 'éteint';
        this.emitAppareilSubject(); //Sert a émettre le subject pour que les component souscris à ce subject verront les changement automatiquement

    }
}