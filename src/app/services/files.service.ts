import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { saveAs } from 'file-saver';
import { map, tap } from 'rxjs';

interface File {
  originalname: string,
  filename: string,
  location: string
}

@Injectable({
  providedIn: 'root'
})
export class FilesService {

  constructor(
    private _http: HttpClient
  ) { }

  getFile(name: string, url: string, type: string) {
    return this._http.get(url, {responseType: 'blob'})
      .pipe(
        tap(resp => {
          const blob = new Blob([resp], {type});
          saveAs(blob, name);
        }),
        map(() => true)
      );
  }

  uploadFile(file: Blob) {
    const dto = new FormData();
    dto.append('file', file);
    return this._http.post<File>('https://young-sands-07814.herokuapp.com/api/files/upload', dto, {
      // headers: {
      //   'Content-type': "multipart/form-data"
      // }
    })
  }
}
