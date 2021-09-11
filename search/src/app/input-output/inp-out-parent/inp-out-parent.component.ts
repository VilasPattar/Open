import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inp-out-parent',
  templateUrl: './inp-out-parent.component.html'
})
export class InpOutParentComponent implements OnInit {

  public parentVar:string='';
  public childValue:string=''

  constructor() { }

  ngOnInit(): void {
  }

  public bindChildValue(event:any):void{
      this.childValue=event;
  }

}
