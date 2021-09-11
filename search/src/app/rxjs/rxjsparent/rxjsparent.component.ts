import { Component, OnInit } from '@angular/core';
import { RxjsserviceService } from '../rxjsservice.service';

@Component({
  selector: 'app-rxjsparent',
  templateUrl: './rxjsparent.component.html',
  styleUrls: ['./rxjsparent.component.scss']
})
export class RxjsparentComponent implements OnInit {

  public rxjsParentValue:String='';

  constructor(private service:RxjsserviceService) { }

  ngOnInit(): void {
    this.service.changedValue$.subscribe(res=>this.rxjsParentValue=res);
  }

}
