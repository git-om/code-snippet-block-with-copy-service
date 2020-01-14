import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SnippetBlockService {

constructor() { }
public codeCopy$: Subject<string> = new Subject<string>();
}
