export class CodeNameModel{
  code: string;
  name: string;

  constructor(code: string, name: string) {
    this.code = code;
    this.name = name;
    console.log('code='+this.code);
  }

  get Code(){
    return this.code;
  }

  get Name(){
    return this.name;
  }

  getCodeNameDisplay(){
    return this.code+" - "+this.name;
  }
}
