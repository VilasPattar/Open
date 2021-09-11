import { AfterViewChecked, AfterViewInit, Component, OnInit,ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html'
})
export class ParentComponent implements OnInit,AfterViewInit {

  constructor() { }

  public parentvar:string='';
  @ViewChild('comp') comp:ChildComponent=new ChildComponent();

  ngOnInit(): void {
    this.parentvar=this.comp.childVar;
  }
  ngAfterViewInit():void{
    this.parentvar=this.comp.childVar;
  }

}
