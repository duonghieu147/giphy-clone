import { Component, OnInit } from '@angular/core';
import { MyTubeService } from 'src/app/shared/service/my-tube.service';

@Component({
  selector: 'app-my-tube',
  templateUrl: './my-tube.component.html',
  styleUrls: ['./my-tube.component.scss']
})
export class MyTubeComponent implements OnInit {

  listDataYTube: any

  constructor(private myTubeService: MyTubeService) { }

  ngOnInit(): void {
    // this.myTubeService.serchForVideos('fifa 19').subscribe( results => {
    //   this.bindingDataYTube(results)
    // })
  }

  bindingDataYTube(data: any) {
    console.log(data)
    this.listDataYTube = data
  }
  search() {
    let key = document.getElementById('search') as HTMLInputElement
    this.serchForVideos(key.value)
  }

  serchForVideos(key: any) {
    this.myTubeService.serchForVideos(key).subscribe(results => {
      this.bindingDataYTube(results)
    })
  }


}
