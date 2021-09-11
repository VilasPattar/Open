import { Component, OnInit } from '@angular/core';
import { RxjsserviceService } from '../rxjsservice.service';

@Component({
  selector: 'app-rxjschild',
  templateUrl: './rxjschild.component.html',
  styleUrls: ['./rxjschild.component.scss']
})
export class RxjschildComponent implements OnInit {

  public rxjsChildValue:string='';
  constructor( private service:RxjsserviceService) { }



  ngOnInit(): void {
  }

  public addUserName():void{
    this.service.addValue(this.rxjsChildValue);
  }
}
