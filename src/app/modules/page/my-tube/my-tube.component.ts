import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
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
    this.serchForVideos('FIFA 19 DVH private')
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);
  }
  
  bindingDataYTube(data: any) {
    console.log(data)
    this.dataYouTube =data
    this.listVideoYTube = data.items
    console.log(this.listVideoYTube)
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
