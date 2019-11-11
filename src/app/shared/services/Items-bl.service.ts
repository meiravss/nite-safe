import {Injectable} from "@angular/core";
import {ItemDataModel} from "../../items/models/item-data.model";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {PostsService} from "./posts.service";

@Injectable({ providedIn : "root"})
export class ItemsBlService{

  items:ItemDataModel[] = [];
  private _selectedItem:ItemDataModel;

  itemFormModel = new FormGroup({
    lang  : new FormControl('',Validators.required),
  });

  get selectedItem(): ItemDataModel {
    return this._selectedItem;
  }

  //TODO: use itemFormModel to custom fields
  set selectedItem(item: ItemDataModel) {
    this._selectedItem = item;
    this.itemFormModel.patchValue({
      lang : `${item.itemDetails.languages.languageCode} +" - "+ ${item.itemDetails.languages.languageName}`
    });
  }

  constructor(protected proxy : PostsService){
    // this.selectedUserFc.valueChanges.pipe(
    //   tap(value => {
    //     this.autoCmpUsers = this.users.filter( user=> user.name.last.includes(value));
    //   })
    // ).subscribe();
    // window['nite'] = this;
  }

  // async getItems() : Promise<ItemDataModel[]> {
  //   this.items         = await this.proxy.fetchPosts()
  //   this._selectedItem = this.items[0];
  //
  //   return this.items;
  // }
}
