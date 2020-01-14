import { Component, OnInit, AfterContentInit, ContentChild, ElementRef } from '@angular/core';
import { SnippetComponent } from './snippet/snippet.component';

@Component({
  selector: 'app-snippet-block',
  templateUrl: './snippet-block.component.html',
  styleUrls: ['./snippet-block.component.scss']
})
export class SnippetBlockComponent implements OnInit, AfterContentInit {

  @ContentChild(SnippetComponent, {static: false, read: ElementRef} ) codeRef: ElementRef;
  constructor() { }
  ngOnInit() {
  }
  ngAfterContentInit() {
    if (!this.codeRef) {
      throw new Error("[Code block not found] Try adding app-code attribute to the <code> block");
    }
  }
}
