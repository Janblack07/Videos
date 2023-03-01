import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CrearvideoComponent } from './Videos/crearvideo/crearvideo.component';
import { EditarvideoComponent } from './Videos/editarvideo/editarvideo.component';
import { VervideoComponent } from './Videos/vervideo/vervideo.component';
import { VideoComponent } from './Videos/video/video.component';

const routes: Routes = [
   {path: '', component:AppComponent},
   {path: 'video',component:VideoComponent,children:[
    {path: 'crear', component:CrearvideoComponent},
    {path: 'ver', component:VervideoComponent},
    {path: 'editar/:id', component:EditarvideoComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
