import {Injectable, OnInit} from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpEventType
} from '@angular/common/http';
import { tap } from 'rxjs/operators';
import {Observable, Subject} from 'rxjs';

import { Post } from '../post.model';
import {ItemDataModel} from "../../items/models/item-data.model";
import {ItemDetailsModel} from "../../items/models/item-details.model";

@Injectable({ providedIn: 'root' })
export class PostsService implements OnInit{
  url = '';
  error = new Subject<string>();
  thumbnailFetchUrl : string = 'http://localhost:8099/items/imagep';//?width=100&height=100";

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:8099/safe/';
  }
  ngOnInit() {}

  createAndStorePost(title: string, content: string) {
    const postData: Post = {title, content };
    this.http
      .post<{ name: string }>(
        'https://ng-complete-guide-c56d3.firebaseio.com/posts.json',
        postData,
        {
          observe: 'response'
        }
      )
      .subscribe(
        responseData => {
          console.log(responseData);
        },
        error => {
          this.error.next(error.message);
        }
      );
  }

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
    //     // Send to analytics server
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

  getBlobThumbnail(): Observable<Blob> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });
    return this.http.post<Blob>(this.thumbnailFetchUrl,
      {
        "url": this.url + 'items/349315/image'
      }, {headers: headers, responseType: 'blob' as 'json' });
  }

  deletePosts() {
    return this.http
      .delete('https://ng-complete-guide-c56d3.firebaseio.com/posts.json', {
        observe: 'events',
        responseType: 'text'
      })
      .pipe(
        tap(event => {
          console.log(event);
          if (event.type === HttpEventType.Sent) {
            // ...
          }
          if (event.type === HttpEventType.Response) {
            console.log(event.body);
          }
        })
      );
  }
}
