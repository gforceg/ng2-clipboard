## ng2-clipboard

a simple component and service for copying text to the user's clipboard.

### installation:

```bash
npm i --save ts-clipboard
npm i --save ng2-clipboard
```

### usage:

#### ClipboardComponent

all of the below usages are valid:

```html
<clipboard-component [content]="someText" [faIcon]="true"></clipboard-component>
<br/>
<clipboard-component [content]="someText" [img]="'assets/img/terribleIcon.png'" [altText]="'copy to clipboard'"></clipboard-component>
<br/>
<clipboard-component [content]="someText" [text]="'click to copy'" [altText]="'copy to clipboard'"></clipboard-component>
<br/>
<clipboard-component [content]="someText" [img]="'assets/img/terribleIcon.png'" [faIcon]="true" [text]="'click to copy'"></clipboard-component>
<br/>
}
```

output

![alt text](https://github.com/gforceg/ng2-clipboard/raw/master/readme/clipboard-component.png "ClipboardComponent")


#### ClipboardService

```typescript
import { Component, OnInit } from '@angular/core';
import { ClipboardService } from 'ng2-clipboard/ng2-clipboard';

@Component({
  moduleId: module.id,
  selector: 'sd-home',
  template: `
<div class="card card-dp">
  <button class="btn btn-primary" (click)="copyToClipboard()">copy to clipboard</button>
  <pre>{{someText}}</pre>
</div>
  `,
  styleUrls: ['home.component.css'],
})

export class HomeComponent implements OnInit {

  constructor(private clipboard: ClipboardService) { }
  errorMessage: string;
  someText: string = `
this
is some
nicely
formatted text`;

  copyToClipboard = () => { this.clipboard.copy(this.someText); }

  ngOnInit() { }

}
```

output


![alt text](https://github.com/gforceg/ng2-clipboard/raw/master/readme/clipboard-service.png "ClipboardService")


### imports:

``` typescript
  @Input() content: string; // the text to be copied
  @Input() altText: string = 'copy to clipboard'; // the title / altText to be displayed on mouseover
```
