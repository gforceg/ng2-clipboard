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
  @Input() faIcon: string // font awesome icons

  @Input() img: string // an image (icon) to be used
  @Input() altText: string = 'copy to clipboard'; // the text to display
  @Input() text: string = 'copy to clipboard'; // the title / altText to be displayed on mouseover

  ngOnInit() {

    }

  copyText = () => {
    if (this.content) {
      // console.log('copyText: %s' + this.content);
      this.clipboard.copy(this.content);
    }
  }
}