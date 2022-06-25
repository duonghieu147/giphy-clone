import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GifsService } from '../gifs.service';

@Component({
  selector: 'app-detail-giphy',
  templateUrl: './detail-giphy.component.html',
  styleUrls: ['./detail-giphy.component.scss']
})
export class DetailGiphyComponent implements OnInit {
  //i seen it use for call api gits .You can seen it at network with response GET:https://giphy.com/
  GIPHY_FE_WEB_API_KEY = "Gc7131jiJuvI7IdN0HZ1D7nh0ow5BU6g"
  id: any;
  firstElement: any;
  gifsList: Array<any> = [];

  constructor(
    private route: ActivatedRoute,
    private gifsService: GifsService
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    //I'm sorry, I can't seen api conform for api detail. I saved it in localStorage
    this.firstElement = JSON.parse(localStorage.getItem('firstElement') || '{}')
    // I'm sorry, I can't get API_KEY (GIPHY_FE_WEB_API_KEY). You can seen it in network  GIPHY_FE_WEB_API_KEY
    this.gifsService.getRelatedGifs(this.GIPHY_FE_WEB_API_KEY, this.id).subscribe(
      (response) => {
        let gits = response.data
        this.bindingDataRelatedGifs(gits)
      }
    )
  }

  /**
   * Handle data Gifs before used it
   * @param data 
   */
  bindingDataRelatedGifs(data: any) {
    var list = [];
    for (let index = 0; index < data.length; index++) {
      var post = data[index];
      var dataBinding = [
        post.id,
        post.type,
        post.url,
        post.create_datetime,
        post.tags,
        post.title,
        post.user,
        post.images,
        post.images.fixed_width.url,
        post.images.fixed_width.mp4,
      ]
      list.push(dataBinding)
    }
    this.gifsList = this.gifsList.concat(list)
  }

  /**
   * Listen emit Output event seach 
   * @param event is Arr data Gifs
   */
  search(event: any) {
    this.gifsList = event
  }

  //Return page home
  back() {
    window.location.replace('/');
  }
}
