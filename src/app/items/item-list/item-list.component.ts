import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import {FormGroup, FormControl, Validators} from "@angular/forms";
import {PostsService} from "../../shared/services/posts.service";
import {ItemDetailsModel} from "../models/item-details.model";

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  items: ItemDetailsModel[];
  formdata: FormGroup;
  selectedIndex: number;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private postService: PostsService) {
  }

  ngOnInit() {
    this.formdata = new FormGroup({
      version: new FormControl("",[Validators.required]),
      chapterNo: new FormControl("",[Validators.required]),
      order: new FormControl("")
    });
  }

  onItemSelected(index) {
    this.selectedIndex = index;
    this.router.navigateByUrl('/items/'+this.items[this.selectedIndex].id);
  }

  onClickSubmit()  {
    let queryString = 'items/chapter/'+this.formdata.value.chapterNo+'/version/'+this.formdata.value.version;
    if(this.formdata.value.order!=''){
      queryString += '/order/'+this.formdata.value.order;
    }
    this.postService.getItemsList(queryString).subscribe(posts => {
      this.items = posts;
      this.selectedIndex = 0;//when search is submitted the first item is selected
      this.router.navigateByUrl('/items/'+this.items[0].id);
      return posts;
    });
  }
}
