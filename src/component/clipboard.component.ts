import {Component, Input, OnInit} from '@angular/core';
import { ClipboardService } from '../clipboard.service';


@Component({
  moduleId: module.id,
  selector: 'clipboard-component',
  templateUrl: 'clipboard.component.html',
  styleUrls: ['clipboard.component.css']
})
export class ClipboardComponent implements OnInit {

  constructor(private clipboard: ClipboardService) { }

  @Input() content: string; // the text to be copied
  @Input() faIcon: boolean // font awesome icons
  @Input() img: string // an image (icon) to be used
  @Input() altText: string; // the text to display
  @Input() text: string; // the title / altText to be displayed on mouseover

  // load default config
  ngOnInit() {
      if (!this.content && !this.faIcon && !this.img && !this.text ) {
        this.text = 'copy';
      }
        if (!this.altText) { this.altText = 'copy to clipboard' }
    }

  copyText = () => {
    if (this.content) {
      // console.log('copyText: %s' + this.content);
      this.clipboard.copy(this.content);
    }
  }
}