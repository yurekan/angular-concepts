import { Component, EventEmitter, Output } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HelloComponent } from './others/hello/hello.component';
import { NgFor, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { setAlternateWeakRefImpl } from '@angular/core/primitives/signals';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HelloComponent, NgFor, NgIf, FormsModule, NgSwitch, NgSwitchCase, NgSwitchDefault],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // ngModel us used for 2-way data binding - we used [(ngModel)] in html file
  show: boolean = false; // variable created to understand if condition in angular
  num: number = 0; // create this variable to understand ngSwitch

  title = ' power of data binding'; // created to understand {{}} data binding
  items = ['Item1', 'Item2', 'Item3']; // variable created to understand for loop

  @Output()
  customEvent = new EventEmitter<void>();

  emitCustomEvent(){
    this.customEvent.emit();
    console.log("Event emitted by a button")
  }

  // This is how we can give a default value to a variable so need of ? then 
  recievedMessage : string = "";

  recieveMessage(message : string){
    this.recievedMessage = message;
  }

  btnClicked($event : any){
    console.log($event);
    alert("Button Clicked");
  }

  // @Input decorator is used to mark the name property as an input
  // Parent passes th value of variableDeclaredInParent to child component's name input
  // using property binding

  variableDeclaredInParent = "ABC XYZ";

  arrayOfObjects = [{name: 'A', value:10},
    {name: 'B', value:20},
    {name: 'C', value:30},
    {name: 'D', value:40},
    {name: 'E', value:50}
  ];

  selectValue1?: string ;
}
