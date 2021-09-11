import { Injectable } from '@angular/core';
import { Observable, observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RxjsserviceService {

  constructor() { }

  public value$:Subject<string>=new Subject<string>();
 // public changedValue$:Observable<string>=new Observable<string>();

    changedValue$=this.value$.asObservable();
    
    public addValue(value:string){
    this.value$.next(value);
  }

}
