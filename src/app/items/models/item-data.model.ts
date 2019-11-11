import {ItemDetailsModel} from "./item-details.model";

// TODO need to use Deserializable in order to build the nested models,
//  otherwise TS does not use the constructor and I cannot inherit from CodeNameModel
export class ItemDataModel{
  whole?: string;
  stem?: string;
  //TODO should be an object of answers with the order
  answers?: string[] = [];
  itemDetails: ItemDetailsModel;


  constructor( itemDetails: ItemDetailsModel, whole?: string, stem?: string, answers?: string[]) {
    this.whole = whole;
    this.stem = stem;
    this.answers = answers? answers: [];
    this.itemDetails = itemDetails;
  }

}
