import { HostListener } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigate-comp',
  templateUrl: './navigate-comp.component.html',
  styleUrls: ['./navigate-comp.component.scss']
})
export class NavigateCompComponent implements OnInit {
  public collapseNav:boolean =false;
  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event'])

onWindowScroll() {
    let element = document.querySelector('.navbar') as HTMLElement;
    
    let element1 = document.querySelector('.nav') as HTMLElement;
    if (window.pageYOffset > element.clientHeight) {
      element.classList.add('navbar-inverse');
      this.collapseNav=true;
      // document.querySelector('.nav')
    } else {
      element.classList.remove('navbar-inverse');
      this.collapseNav=false;
      // element.classList.remove('top-nav-collapse');
    }

  }

  changeStyle($event:any){
   // this.color = $event.type == 'mouseover' ? 'yellow' : 'red';
   if($event.type=='mouseover'){
    let element=document.querySelector('.btn') as HTMLElement;
    element.classList.remove('bg-transparent');
   }
   else{
     
    let element=document.querySelector('.btn') as HTMLElement;
    element.classList.add('bg-transparent');
   }
  }

}
