import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  public _searchItem:string='';

  @Output() searchItemEmit:EventEmitter<string>=new EventEmitter();

  constructor() { }
  get searchItem():string{
    return this._searchItem;
  }

  set searchItem(value:string){
    this._searchItem=value;
    this.searchItemEmit.emit(this.searchItem);
  }

  ngOnInit(): void {
  }

  public search():void{

    this.searchItemEmit.emit(this.searchItem);
  }

}
