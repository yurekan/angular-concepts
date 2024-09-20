import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Customer } from '../customer';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-lifecycle-hooks',
  standalone: true,
  imports: [NgFor],
  templateUrl: './lifecycle-hooks.component.html',
  styleUrl: './lifecycle-hooks.component.css'
})
export class LifecycleHooksComponent implements OnChanges{

  @Input()
  message: string = "";

  @Input()
  customer: Customer;

  changeLog: string[] = [];

  constructor(){
    this.customer = new Customer(); // this is what constructor is used for, just to initialize 
    // model class object with default values, code to 0 and name to "".
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('See when onChanges is called automatically because it is one of the lifecycle' + 
      'method of a Component');
    
    console.log(JSON.stringify(changes));

    for(const propName in changes){
      const change = changes[propName];
      const to = JSON.stringify(change.currentValue);
      const from = JSON.stringify(change.previousValue);
      const changeLog = `${propName} : changes from ${from} to ${to}`;
      this.changeLog.push(changeLog);
    }
  }

}
