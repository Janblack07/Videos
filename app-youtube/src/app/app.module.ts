import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavComponent } from './Shared/nav/nav.component';
import { VideoComponent } from './Videos/video/video.component';
import { CrearvideoComponent } from './Videos/crearvideo/crearvideo.component';
import { VervideoComponent } from './Videos/vervideo/vervideo.component';
import { EditarvideoComponent } from './Videos/editarvideo/editarvideo.component';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    VideoComponent,
    CrearvideoComponent,
    VervideoComponent,
    EditarvideoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    Ng2SearchPipeModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
