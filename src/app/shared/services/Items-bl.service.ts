import {Injectable} from "@angular/core";
import {ItemDataModel} from "../../items/models/item-data.model";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {PostsService} from "./posts.service";
import {ItemDetailsModel} from "../../items/models/item-details.model";

@Injectable({ providedIn : "root"})
export class ItemsBlService{

  items:ItemDetailsModel[] = [];
  private _selectedItem:ItemDetailsModel;

  itemFormModel = new FormGroup({
    lang  : new FormControl('',Validators.required),
    selectedItem : new FormControl(""),
  });

  get selectedItem(): ItemDetailsModel {
    return this._selectedItem;
  }

  //TODO: Eyal: use itemFormModel in item-details as FormGroup. how to use selectItem?
  set selectedItem(item: ItemDetailsModel) {
    this._selectedItem = item;
    this.itemFormModel.patchValue({
      lang : `${item.languages.languageCode} +" - "+ ${item.languages.languageName}`
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

  // async getItems(queryString: string) : Promise<ItemDetailsModel[]> {
  //   this.items         = await this.proxy.getItemsList(queryString);
  //   this._selectedItem = this.items[0];
  //
  //   return this.items;
  // }
}
