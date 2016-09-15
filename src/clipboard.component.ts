import {Component, Input} from '@angular/core';
import { Clipboard } from 'ts-clipboard';

@Component({
  selector: 'clipboard-component',
  template: '<span class="fa fa-copy clipboard" (click)="copyText()"></span>',
  styles: [`
.clipboard {
    cursor: pointer;
		border-radius: 3px;
		float: right;
		padding: 2px;
		margin: 2px;
    background-color: #efefef;
    color: #000;
    box-shadow: 1px 1px 10px black;
}
`]
})
export class ClipboardComponent {
  constructor() { }

  @Input() content: string;


  copyText = () => {
  	if (this.content) {
      console.log('copyText: %s' + this.content);
  		Clipboard.copy(this.content);
  	}
  }
}