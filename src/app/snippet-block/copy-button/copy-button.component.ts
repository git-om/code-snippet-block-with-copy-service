import { Component, OnInit, Input, ElementRef, OnDestroy, Inject } from '@angular/core';
import { SnippetBlockService } from '../snippet-block.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-copy-button',
  templateUrl: './copy-button.component.html',
  styleUrls: ['./copy-button.component.scss']
})
export class CopyButtonComponent implements OnInit, OnDestroy {
  innerText = null;
  private buttonUuid: string;
  private unSubscribeCodeCopy$: Subscription;

  // tslint:disable-next-line: no-input-rename
  @Input('codeRef') codeRef: HTMLElement;

  public codeCopied: boolean = false;

  constructor( @Inject(SnippetBlockService) private snippetBlockService: SnippetBlockService) { }

  ngOnInit() {
    this.buttonUuid = this.generateUuid();
    this.unSubscribeCodeCopy$ = this.snippetBlockService.codeCopy$.subscribe((buttonUuid: string) => {
      if(buttonUuid !== this.buttonUuid) {
        this.codeCopied = false;
      }
    })
  }

  ngOnDestroy(): void {
    this.unSubscribeCodeCopy$.unsubscribe();
  }

  public onCopyHandler() {
    this.codeCopied = true;
    this.snippetBlockService.codeCopy$.next(this.buttonUuid);
  }

  private generateUuid(): string {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
  }

}
