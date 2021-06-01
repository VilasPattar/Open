
import { Component, OnInit,ElementRef } from '@angular/core';
// import { Component,ElementRef } from '@angular/core';
import { CommonModule, CurrencyPipe} from '@angular/common';

@Component({
  selector: 'app-eligibility-calc',
  templateUrl: './eligibility-calc.component.html',
  styleUrls: ['./eligibility-calc.component.scss']
})
export class EligibilityCalcComponent implements OnInit {

  public monthlyIncome:number=100000;
  public monthlyExpense:number=50000;
  public formattedAmount:any="15000";

  constructor(private currencyPipe : CurrencyPipe) { }

  ngOnInit(): void {
    // this.formattedAmount = this.currencyPipe.transform(15000, 'INR');
  }

  transformAmount(element:any){
    this.formattedAmount = this.currencyPipe.transform(this.formattedAmount, 'INR');
    this.formattedAmount=this.formattedAmount
    element.target.value = this.formattedAmount;
  }

  setmonthlyIncome(monthlyIncome:any) {
    this.monthlyIncome = monthlyIncome;

    let track = document.querySelector('.track-inner') as HTMLElement
  

    let per=(monthlyIncome-100000)*100/200000;
    track.style.width = `${per}%`;
  }

  setMonthlyExpense(monthlyExpense:any){
    let track = document.querySelector('.track-inner2') as HTMLElement

    this.monthlyExpense=monthlyExpense;
  let per= monthlyExpense/1000

  track.style.width = `${per}%`;
  }

}
