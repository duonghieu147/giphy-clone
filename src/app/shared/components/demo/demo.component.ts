import { Component, OnInit } from '@angular/core';
import { FireBaseService } from '../../services/fire-base.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {
  dbResponse:any
  dbCreate = {
    book_name: 'create',
    isbn_10: 10,
    author_name: 'author_name',
    publication_date: new Date(),
    binding_type: 'binding_type',
    in_stock: 'in_stock',
    languages: ['vn'],
  }
  dbUpdate = {
    book_name: 'update',
    isbn_10: 10,
    author_name: 'author_name',
    publication_date: new Date(),
    binding_type: 'binding_type',
    in_stock: 'in_stock',
    languages: ['vn'],
  }
  constructor(
    private fireBaseService: FireBaseService
  ) { }

  ngOnInit(): void {

  }

  addBook(book: any) {
    this.fireBaseService.AddBook(book);
  }
  getBook(id: any) {
    console.log('getBook', id)
    this.fireBaseService.GetBook(id).valueChanges().subscribe(results => {
      console.log('getBook', results)
    })
  }
  getBookList() {
    this.dbResponse=this.fireBaseService.GetBookList().snapshotChanges()
    .subscribe(results=> {
      console.log('getBookList', results)

    })
  }
  updateBook(id: any, book: any) {
    console.log('updateBook',id, book);
    this.fireBaseService.UpdateBook(id, book);
  }
  deleteBook(id: any) {
    console.log('deleteBook', id);
    this.fireBaseService.DeleteBook(id);
  }

}
