import {LangModel} from "./lang.model";
import {ChapterDomainModel} from "./chapter-domain.model";


export interface ItemDetailsModel{
  id: number;
  itemNo: number;
  answerNum: number;
  languages: LangModel;
  chapterDomain: ChapterDomainModel;
  itemRevis: number;
  notBamotFlag: boolean;
  itemDomain: ItemDomainModel;
  itemStatus: CodeTableModel;
  parentItem: ParentItemModel;
  remark: string;
  itemRevisC: CodeTableModel;
}

export interface ItemDomainModel{
  id: number;
  domainName: string;
  itemDomain: string;
}

export interface CodeTableModel{
  codeKey: string;
  codeValue: string;
}

export interface ParentItemModel {
  id:number;
  parentItemVersion: string;
  parentItemNum: string;

}
