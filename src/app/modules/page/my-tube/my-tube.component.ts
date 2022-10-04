import { Component, OnInit } from '@angular/core';
import { MyTubeService } from 'src/app/shared/service/my-tube.service';

@Component({
  selector: 'app-my-tube',
  templateUrl: './my-tube.component.html',
  styleUrls: ['./my-tube.component.scss']
})
export class MyTubeComponent implements OnInit {

  listSongYTube: any;
  listVideoYTube: any;
  idVideo = 'x2ZdnWIzsno'



  constructor(private myTubeService: MyTubeService) { }

  ngOnInit(): void {
    this.myTubeService.serchForVideoV2('cuộc đời của tôi').subscribe( results => {
      this.bindingDataYTube(results)
    })
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);
  }

  bindingDataYTube(data: any) {
    this.listSongYTube = data.result.songs
    this.listVideoYTube = data.result.videos
    console.log(data.result)
    console.log(this.listVideoYTube)
    this.idVideo=this.listVideoYTube[0].id
  }
  search() {
    let key = document.getElementById('search') as HTMLInputElement
    this.serchForVideos(key.value)
  }

  serchForVideos(key: any) {
    this.myTubeService.serchForVideoV2(key).subscribe(results => {
      this.bindingDataYTube(results)
    })
  }


}
