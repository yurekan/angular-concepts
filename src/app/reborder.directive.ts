import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appReborder]',
  standalone: true
})
export class ReborderDirective {
  // @HostBinding('value') myValue is same as eaxctly as [value]="myValue(Property Binding Concept)"
  @HostBinding('style.border')
  border = '2px solid red';
}
