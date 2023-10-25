import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Watch } from '../model/watch.model';
import { WatchService } from '../services/watch.service';

@Component({
  selector: 'app-update-watch',
  templateUrl: './update-watch.component.html',
})
export class UpdateWatchComponent {
  currentWatch = new Watch();
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private watchService: WatchService
  ) {}

  ngOnInit(): void {
    console.log(this.activatedRoute.snapshot.params['id']);
    this.currentWatch = this.watchService.consulterWatch(
      this.activatedRoute.snapshot.params['id']
    );
    console.log(this.currentWatch);
  }
  updateWatch() {
    this.watchService.updateWatch(this.currentWatch);
    this.router.navigate(['watches']);
  }
}
