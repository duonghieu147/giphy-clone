import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { AngularFireStorage } from '@angular/fire/compat/storage';

import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { FileUpload } from './file-upload';
@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
  private basePath = '/uploads';

  constructor(private db: AngularFireDatabase, private storage: AngularFireStorage) { }

  /**
   * upload file to Firebase Storage
   * save file’s info (name, url) to Firebase Database.
   * @param fileUpload 
   * @returns 
   */
  pushFileToStorage(fileUpload: FileUpload): Observable<number | undefined> {
    const filePath = `${this.basePath}/${fileUpload.file.name}`;
    const storageRef = this.storage.ref(filePath);
    const uploadTask = this.storage.upload(filePath, fileUpload.file);

    uploadTask.snapshotChanges().pipe(
      finalize(() => {
        storageRef.getDownloadURL().subscribe(downloadURL => {
          fileUpload.url = downloadURL;
          fileUpload.name = fileUpload.file.name;
          this.saveFileData(fileUpload);
        });
      })
    ).subscribe();

    return uploadTask.percentageChanges();
  }

  private saveFileData(fileUpload: FileUpload): void {
    this.db.list(this.basePath).push(fileUpload);
  }

  getFiles(numberItems: number): AngularFireList<FileUpload> {
    return this.db.list(this.basePath, ref =>
      ref.limitToLast(numberItems));
  }

  /**
   * 1.Delete record from Realtime Database
   * 2.Delete img from Storage
   * @param fileUpload 
   */
  deleteFile(fileUpload: FileUpload): void {
    this.deleteFileDatabase(fileUpload.key)
      .then(() => {
        this.deleteFileStorage(fileUpload.name);
      })
      .catch(error => console.log(error));
  }

  // Delete record from Realtime Database
  private deleteFileDatabase(key: string): Promise<void> {
    return this.db.list(this.basePath).remove(key);
  }

  // Delete img from Storage
  private deleteFileStorage(name: string): void {
    const storageRef = this.storage.ref(this.basePath);
    storageRef.child(name).delete();
  }
}