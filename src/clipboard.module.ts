import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClipboardService }   from './clipboard.service';
import { ClipboardComponent } from './component/clipboard.component';
import { FontAwesomeModule } from 'ng2-font-awesome';

@NgModule({
  imports: [CommonModule, FontAwesomeModule],
  exports: [ClipboardComponent, FontAwesomeModule],
  declarations: [ClipboardComponent],
  providers: [ClipboardService],
})
export class ClipboardModule { }

