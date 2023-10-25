import { Component, OnInit } from '@angular/core';
import { Watch } from '../model/watch.model';
import { WatchService } from '../services/watch.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-watch',
  templateUrl: './add-watch.component.html',
})
export class AddWatchComponent implements OnInit {
  newWatch = new Watch();
  // message: string = '';
  constructor(
    private watchService: WatchService,
    private router: Router
  ) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  addWatch() {
    this.watchService.ajouterWatch(this.newWatch);
    window.alert(`watch ${this.newWatch.nomWatch} ajouter avec succes`);
    this.router.navigate(['watches']);
  }
}
