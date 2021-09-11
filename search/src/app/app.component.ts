import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'demo';
  public searchText:string=''
 
  public ngOnInit(){
  }

  public onSearch(event:any):void{
    this.searchText=event;
  }


}
