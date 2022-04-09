import {Component, Input} from '@angular/core';

@Component({
  selector: 'square',
  templateUrl: './square.component.html',
  styles: ['button { width: 100%; height: 100%; font-size: 5em !important; }']
})
export class SquareComponent {
  // @ts-ignore
  @Input() value:string = 'X' | 'O' ;

  constructor() { }

}
