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
  idVideo = 'IosC_hnU1DQ'
  dataYouTube:any



  constructor(private myTubeService: MyTubeService) { }

  ngOnInit(): void {
    this.serchForVideos('Cuộc sống của tôi')
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);
  }

  bindingDataYTube(data: any) {
    console.log(data)
    this.dataYouTube =data
    this.listVideoYTube = data.items
    console.log(this.listVideoYTube)


    // this.listSongYTube = data.result.songs
    // this.idVideo=this.listVideoYTube[0].id
  }
  search() {
    let key = document.getElementById('search') as HTMLInputElement
    this.serchForVideos(key.value)
  }

  serchForVideos(key: any) {
    this.myTubeService.searchVieoByYoutube(key).subscribe(results => {
      this.bindingDataYTube(results)
    })
  }


}
