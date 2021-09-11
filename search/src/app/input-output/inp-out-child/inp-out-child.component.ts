import { Component, Input, OnInit, Output,EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'app-inp-out-child',
  templateUrl: './inp-out-child.component.html'
})
export class InpOutChildComponent implements OnChanges {

 @Input() public parentValue:string='';
 @Output() emitChildValue:EventEmitter<any>=new EventEmitter();

 public _childVar:string='';

 get childVar():string{
   return this._childVar;
 }

 set childVar(value:string){
   this._childVar=value;
   this.emitChildValue.emit(value)
 }

  constructor() { }

  ngOnChanges(): void { 
  }

}
