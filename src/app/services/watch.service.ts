import { Injectable } from '@angular/core';
import { Watch } from '../model/watch.model';

@Injectable({
  providedIn: 'root',
})
export class WatchService {
  watches: Watch[]; // Tableau de chaînes de caractères

  constructor() {
    this.watches = [
      {
        idWatch: 1,
        nomWatch: 'Swatch',
        prixWatch: 3000.6,
        dateCreation: new Date('01/14/2011'),
      },
      {
        idWatch: 2,
        nomWatch: 'Rolex',
        prixWatch: 450,
        dateCreation: new Date('12/17/2010'),
      },
      {
        idWatch: 3,
        nomWatch: 'Omega',
        prixWatch: 900.123,
        dateCreation: new Date('02/20/2020'),
      },
    ];
  }
  listeWatch(): Watch[] {
    return this.watches;
  }

  ajouterWatch(watch: Watch) {
    this.watches.push(watch);
  }

  supprimerWatch(wt: Watch) {
    const index = this.watches.indexOf(wt, 0);
    if (index > -1) {
      this.watches.splice(index, 1);
    }
  }
  consulterWatch(id: number): Watch {
    return this.watches.find((p) => p.idWatch == id)!;
  }
  updateWatch(w: Watch) {
    this.supprimerWatch(w);
    this.ajouterWatch(w);
    this.trierWatches();
  }
  trierWatches() {
    this.watches = this.watches.sort((n1, n2) => {
      if ((n1.idWatch || 0) > (n2.idWatch || 1)) {
        return 1;
      }
      if ((n1.idWatch || 1) < (n2.idWatch || 0)) {
        return -1;
      }
      return 0;
    });
  }
}
