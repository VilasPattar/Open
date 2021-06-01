import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-open-detail',
  templateUrl: './open-detail.component.html',
  styleUrls: ['./open-detail.component.scss']
})
export class OpenDetailComponent implements OnInit {
public hoverQuick:boolean=false;
public hoverLow:boolean=false;
public hoverZero:boolean=false;
public hoverAce:boolean=false;
public hoverLoans:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }

}
