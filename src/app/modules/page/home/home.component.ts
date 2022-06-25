import { Component, OnInit } from '@angular/core';
import { GifsService } from '../gifs.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  //i seen it use for call api gits .You can seen it at network with response GET:https://giphy.com/
  GIPHY_FE_WEB_API_KEY = "Gc7131jiJuvI7IdN0HZ1D7nh0ow5BU6g"
  gifsList: Array<any> = [];

  constructor(
    private gifsService: GifsService,
  ) { }

  ngOnInit(): void {
    // GET data trend gifs ,then handle it
    // I'm sorry, I can't get API_KEY (GIPHY_FE_WEB_API_KEY). You can seen it in network  GIPHY_FE_WEB_API_KEY
    this.gifsService.getTrendGifs(this.GIPHY_FE_WEB_API_KEY).subscribe(
      (response) => {
        let gits = response.data
        this.bindingData(gits)
      }
    )
  }

  searchColorControl = new FormControl('');

  /**
   * Handle data Gifs before used
   * @param data 
   */
  bindingData(data: any) {
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

}
