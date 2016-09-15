import { NgModule, ModuleWithProviders } from '@angular/core';
import { ClipboardService }   from './clipboard.service';
import { ClipboardComponent } from './clipboard.component';


@NgModule({
  imports: [],
  exports: [ClipboardComponent,],
  declarations: [ClipboardComponent],
  providers: [ClipboardService],
})
export class ClipboardModule { }

