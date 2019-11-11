import { Component, OnInit, Input } from '@angular/core';

import {ItemDetailsModel} from "../../models/item-details.model";

@Component({
  selector: 'app-item-single',
  templateUrl: './item-single.component.html',
  styleUrls: ['./item-single.component.css']
})
export class ItemSingleComponent implements OnInit {
   @Input() item: ItemDetailsModel;
  @Input() index: number;

  ngOnInit() {
  }
}
