import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-gif',
  templateUrl: './item-gif.component.html',
  styleUrls: ['./item-gif.component.scss']
})
export class ItemGifComponent implements OnInit {


  @Input() item: any
  isLoading : boolean = true

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  openDetailGiphy(){ 
    localStorage.setItem('firstElement',JSON.stringify(this.item))
    this.router.navigate(['gifs/'+this.item[0]]).then(() => {
      window.location.reload();
    });;
  }

  endLoading(){
    this.isLoading = true
    console.log(this.isLoading)
  }
}
