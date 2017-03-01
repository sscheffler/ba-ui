export class Identity {
  name: string;
  type: string;
  identificationRegex: string;
  _links: {
    self: {
        href:string
      }
  }

  constructor(){
    this._links = {self: {href: "new"}};
  };

  public selfUrl() {
    return this._links.self.href;
  }

}
