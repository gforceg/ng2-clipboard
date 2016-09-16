import {Component, Input, OnInit} from '@angular/core';
import { ClipboardService } from './clipboard.service';

const DEFAULT_STYLE = [`
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
`];

@Component({
  selector: 'clipboard-component',
  template: '<span class="clipboard" (click)="copyText()" [title]="altText">copy to clipboard</span>',
  styles: DEFAULT_STYLE
})
export class ClipboardComponent {
  constructor(private clipboard: ClipboardService) { }

  @Input() content: string; // the text to be copied
  @Input() faIcon: string // font awesome icons
  @Input() altText: string = 'copy to clipboard'; // the text to display
  @Input() text: string = 'copy to clipboard'; // the title / altText to be displayed on mouseover
  @Input() css: string;

  copyText = () => {
    if (this.content) {
      // console.log('copyText: %s' + this.content);
      this.clipboard.copy(this.content);
    }
  }

  
}