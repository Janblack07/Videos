import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiYoutubeService } from 'src/app/Service/api-youtube.service';

@Component({
  selector: 'app-crearvideo',
  templateUrl: './crearvideo.component.html',
  styleUrls: ['./crearvideo.component.css']
})
export class CrearvideoComponent {
  constructor(private video:ApiYoutubeService){}
  videoForm= new FormGroup({
    nombreCanal: new FormControl(''),
    url: new FormControl(''),
    seguidor: new FormControl(''),
  })

  registroVideo(body:any): void{
    this.video.CreateVideo(body).subscribe((data:any)=>{
      console.log(data);
      alert('Se creo con exito el video.');
      this.videoForm.reset();
    },(e:any)=>{console.log(e);});
  }
}
