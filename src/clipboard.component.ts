import {Component, Input} from '@angular/core';
import { ClipboardService } from './clipboard.service';

@Component({
  selector: 'clipboard-component',
  template: '<span class="fa fa-copy clipboard" (click)="copyText()" [title]="altText"></span>',
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
  constructor(private clipboard: ClipboardService) { }

  @Input() content: string; // the text to be copied
  @Input() altText: string = 'copy to clipboard'; // the title / altText to be displayed on mouseover

  copyText = () => {
  	if (this.content) {
      console.log('copyText: %s' + this.content);
  		this.clipboard.copy(this.content);
  	}
  }
}