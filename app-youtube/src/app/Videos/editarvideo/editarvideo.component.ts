import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiYoutubeService } from 'src/app/Service/api-youtube.service';

@Component({
  selector: 'app-editarvideo',
  templateUrl: './editarvideo.component.html',
  styleUrls: ['./editarvideo.component.css']
})
export class EditarvideoComponent {
  id:any;
  data:any;
  constructor(private router:Router,private route: ActivatedRoute,private videos:ApiYoutubeService){}
  videoForm= new FormGroup({
    nombreCanal: new FormControl(''),
    url: new FormControl(''),
    seguidor: new FormControl(''),
  })
  ngOnInit(){

    this.id = this.route.snapshot.params['id'];
     this.videos.OneVideo(this.id).subscribe((data:any)=>{
     this.data=data.Video;
     this.videoForm.setValue({
       "nombreCanal": this.data.nombreCanal,
       "url":this.data.url,
       "seguidor":this.data.seguidor,
     })
   },(e)=>{console.log(e);});

 }

 onUpdate(data:any){
   console.log(data);
    this.videos.UpdateVideo(this.id,data).subscribe((data =>{
     alert('Se actualizo conrrectamente el equipo.');
     this.router.navigate(['/video/ver']);
   }))
 }
}
