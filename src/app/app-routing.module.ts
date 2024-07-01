import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StationsComponent } from './stations/stations.component';
import { AudioPlayerComponent } from './audio-player/audio-player.component';

const routes: Routes = [{
  path: '',
  component: StationsComponent},
{
  path:'player',
  component:AudioPlayerComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
