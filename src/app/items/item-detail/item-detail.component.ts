import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import {PostsService} from '../../shared/services/posts.service';
import {ItemDataModel} from "../models/item-data.model";


@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit{
  item: ItemDataModel;
  id: number;
  imageBlobUrl: any = null;

  userInfoModel = new FormGroup({
    lang  : new FormControl('kkk'),
  });

  constructor(private route: ActivatedRoute,
              private router: Router,
              private postService: PostsService) {
  }



  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.postService.fetchPosts('items/' + this.id).subscribe(posts => {
            this.item =new ItemDataModel(posts['ITEM'],posts['WHOLE'],posts['STEM'],posts['ANSWER']);
            return posts;
          });
          this.postService.getImage('items/'+ this.id+'/image')
            .subscribe((val) => {
                this.createImageFromBlob(val);
              },
              response => {
                console.log("POST - getThumbnail - in error", response);
              },
              () => {
                console.log("POST - getThumbnail - observable is now completed.");
              });
        }
      );


  }

  onEditRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.route});
    // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
  }

    getChapterDomainDisplay(){
      return this.item.itemDetails.chapterDomain.domainName +" - "+ this.item.itemDetails.chapterDomain.domainCode;
    }
  getLangDisplay(){
    let str = this.item.itemDetails.languages.languageCode +" - "+ this.item.itemDetails.languages.languageName;
    return str;
  }
  getStatusDisplay(){
    return ""+this.item.itemDetails.itemStatus.codeKey +" - "+ this.item.itemDetails.itemStatus.codeValue;
  }
  getReviseDisplay(){
    return ""+this.item.itemDetails.itemRevisC.codeKey +" - "+ this.item.itemDetails.itemRevisC.codeValue;
  }
  getParentDomainDisplay(){
    return this.item.itemDetails.parentItem.parentItemNum +" - "+ this.item.itemDetails.parentItem.parentItemVersion;
  }
  getItemDomainDisplay(){
    return this.item.itemDetails.itemDomain.domainName +" - "+ this.item.itemDetails.itemDomain.itemDomain;
  }
  getThumbnail() : void {
    this.postService.getImage('items/image')
      .subscribe((val) => {
          this.createImageFromBlob(val);
        },
        response => {
          console.log("POST - getThumbnail - in error", response);
        },
        () => {
          console.log("POST - getThumbnail - observable is now completed.");
        });
  }
  createImageFromBlob(image: Blob) {
    let reader = new FileReader();
    reader.addEventListener("load", () => {
      this.imageBlobUrl = reader.result;
    }, false);
    if (image) {
      reader.readAsDataURL(image);
    }
  }
}
