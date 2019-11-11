import {Injectable, OnInit} from '@angular/core';
import { HttpClient, HttpHeaders, HttpEventType } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import {Observable, Subject} from 'rxjs';

import { Post } from '../post.model';
import {ItemDataModel} from "../../items/models/item-data.model";
import {ItemDetailsModel} from "../../items/models/item-details.model";
import {environment} from "../../../environments/environment";

@Injectable({ providedIn: 'root' })
export class PostsService implements OnInit{
  url = `${environment.safeUrl}`;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {}

  // TODO see usage in item-detail.component.ts
  fetchPosts(queryString: string):Observable<ItemDataModel>{
    return this.http
      .get<ItemDataModel>(this.url + queryString);
    // .pipe(
    //   map(responseData => {
    //     const postsArray = [];
    //     for (const key in responseData) {
    //       console.log('key = '+key);
    //       if (responseData.hasOwnProperty(key)) {
    //         console.log('key 2= '+responseData[key]);
    //         postsArray.push({ ...responseData[key], id: key });
    //       }
    //     }
    //     return postsArray;
    //   })
    //)
    // .pipe(
    //   map(responseData => {
    //     return responseData;
    //   }),
    //   catchError(errorRes => {
    //     return throwError(errorRes);
    //   })
    // );
  }

  getItemsList(queryString: string):Observable<ItemDetailsModel[]>{
    return this.http
      .get<ItemDetailsModel[]>(this.url + queryString);
  }

  getImage(imageUrl: string): Observable<Blob> {
    return this.http.get(this.url + imageUrl, { responseType: 'blob' });
  }

  // not in use!
  getBlobThumbnail(): Observable<Blob> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });
    return this.http.post<Blob>('http://localhost:8099/items/imagep'/**?width=100&height=100";*/,
      {
        "url": this.url + 'items/349315/image'
      }, {headers: headers, responseType: 'blob' as 'json' });
  }
}
