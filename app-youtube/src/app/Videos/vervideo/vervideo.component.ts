import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiYoutubeService } from 'src/app/Service/api-youtube.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-vervideo',
  templateUrl: './vervideo.component.html',
  styleUrls: ['./vervideo.component.css']
})
export class VervideoComponent {
  searchTerm!:any;
  videos!:any;
  constructor(private video:ApiYoutubeService,private route:Router,
    private _sanitizer: DomSanitizer
){}
  ngOnInit(): void {
    this.video.AllVideo().subscribe((res:any)=>{
      console.log(res.Videos)
       this.videos=res.Videos
       console.log(this.videos)
    },(e)=>{console.log(e);})
  }
  getVideoIframe(url:any) {
    var video, results;

    if (url === null) {
        return '';
    }
    results = url.match('[\\?&]v=([^&#]*)');
    video   = (results === null) ? url : results[1];

    return this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + video);
}

  onDelete(id:any):void{
    this.video.DeleteVideo(id).subscribe(data =>{
      alert('Se Elimino el Video Correctamente')
    this.ngOnInit()
    })
  }
  onUpdate(id:any):void{
    console.log("navegar")
    console.log(id)
    this.route.navigate(['video/editar/',id]);
  }
  OnPDF(){
    this.video.pdf().subscribe((data:any) =>{
      const blob = new Blob([data],{type:'application/pdf'});
      const url = window.URL.createObjectURL(blob);
      window.open(url);
    },(e)=>{console.log(e);});
  }

}
