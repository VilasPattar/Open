import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Open-Assignment';
  public gridsize:number=100000;
  setRam(event:any) {
    this.gridsize = event;
  }

}
