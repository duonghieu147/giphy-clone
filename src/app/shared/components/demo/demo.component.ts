import { Component, OnInit } from '@angular/core';
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

  selectedFiles?: FileList;
  currentFileUpload?: FileUpload;
  percentage = 0;
  fileUploads?: any[];

  constructor(
    private fireBaseService: FireBaseService,
    private uploadService: FileUploadService
  ) { }

  ngOnInit(): void {
    this.getFilesUpload()
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
}
