import { Injectable } from '@angular/core';
import { Clipboard } from 'ts-clipboard';

@Injectable()
export class ClipboardService {
	constructor() {}
	// clipboard = {copy: function(str:string) { console.log('copy %s', str); } };
	copy(str: string): void { Clipboard.copy(str); };
}
