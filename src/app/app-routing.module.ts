import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WatchesComponent } from './watches/watches.component';
import { AddWatchComponent } from './add-watch/add-watch.component';
import { UpdateWatchComponent } from './update-watch/update-watch.component';

const routes: Routes = [
  { path: 'watches', component: WatchesComponent },
  { path: 'add-watch', component: AddWatchComponent },
  { path: 'updateWatch/:id', component: UpdateWatchComponent },
  { path: '', redirectTo: 'watches', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
