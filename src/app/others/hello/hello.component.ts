import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TestComponent } from '../test/test.component';

@Component({
  selector: 'app-hello',
  standalone: true,
  imports: [TestComponent],
  templateUrl: './hello.component.html',
  styleUrl: './hello.component.css'
})
export class HelloComponent {

  // Same event handling we did in parent
  // Similar kind of event handling can be done in chikd and can be taken to Parent Component.

  @Output()
  messageEvent = new EventEmitter();

  sendMessage(){
    this.messageEvent.emit("Message Passed from Hello Component");
  }

  // In angular 18, @Input() decorator is used to pass data from parent component to 
  // a chold component, @Input marks a property

  @Input()
  name : string = "PQR";

}
