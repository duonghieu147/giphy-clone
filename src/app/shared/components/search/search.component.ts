import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { GifsService } from 'src/app/modules/page/gifs.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Output() searchEvent = new EventEmitter<any>();

  //i seen it use for call api gits .You can seen it at network with response GET:https://giphy.com/
  GIPHY_FE_WEB_API_KEY = "Gc7131jiJuvI7IdN0HZ1D7nh0ow5BU6g"
  gifsList: Array<any> = [];

  constructor(
    private gifsService: GifsService,
  ) { }

  ngOnInit(): void {
  }

  searchColorControl = new FormControl('');

  //search gifs by key word
  search() {
    this.gifsList = [] //reset data before search
    let keySearch = this.searchColorControl.value?.trim() // delete space
    // I'm sorry, I can't get API_KEY (GIPHY_FE_WEB_API_KEY). You can seen it in network  GIPHY_FE_WEB_API_KEY
    this.gifsService.getSearchGifs(this.GIPHY_FE_WEB_API_KEY, keySearch + '').subscribe(
      (response) => {
        let gits = response.data
        this.bindingData(gits)
      }
    )
  }

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
    this.searchEvent.emit(this.gifsList)
  }
}
