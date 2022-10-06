import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { map } from 'rxjs';
import { FileUpload } from '../../services/file-upload';
import { FileUploadService } from '../../services/file-upload.service';
import { FireBaseService } from '../../services/fire-base.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {
  dbResponse:any
  dbCreate = {
    book_name: '1111',
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

  selectedFiles?: FileList;
  currentFileUpload?: FileUpload;
  percentage = 0;
  fileUploads?: any[];
  Rform: FormGroup ;

  constructor(
    private fireBaseService: FireBaseService,
    private uploadService: FileUploadService
  ) { }

  ngOnInit(): void {
    this.getFilesUpload()
    this.Rform= new FormGroup({
      book_name: new FormControl(''),
      isbn_10: new FormControl(0),
      author_name: new FormControl(''),
      publication_date: new FormControl(new Date()),
      binding_type: new FormControl('mockdata'),
      in_stock: new FormControl(''),
      languages: new FormControl(['vn']),

    });
  }
  getBook(id: any) {
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

  addBook(book: any) {
    console.log('addBook', book)
    this.fireBaseService.AddBook(book);
  }
  updateBook(id: any, book: any) {
    let id_update = document.getElementById('id_update') as HTMLInputElement;
    console.log('updateBook', id_update, book)
    this.fireBaseService.UpdateBook(id_update.value, book);
  }
  deleteBook(id: any) {
    console.log('deleteBook', id);
    this.fireBaseService.DeleteBook(id);
  }

//////
  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
  }

  upload(): void {
    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);
      this.selectedFiles = undefined;

      if (file) {
        this.currentFileUpload = new FileUpload(file);
        this.uploadService.pushFileToStorage(this.currentFileUpload).subscribe(
          percentage => {
            this.percentage = Math.round(percentage ? percentage : 0);
          },
          error => {
            console.log(error);
          }
        );
      }
    }
  }

  deleteFileUpload(fileUpload: FileUpload): void {
    this.uploadService.deleteFile(fileUpload);
  }

  getFilesUpload() {
    this.uploadService.getFiles(6).snapshotChanges().pipe(
      map(changes =>
        // store the key
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    ).subscribe(fileUploads => {
      this.fileUploads = fileUploads;
    });
  }

  /**
   * Form 
   */

}
