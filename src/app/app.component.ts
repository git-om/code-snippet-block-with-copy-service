import { Component, ViewChildren, ElementRef, AfterViewInit, QueryList, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements AfterViewInit {
  title = 'copycodesnippet';
  name = 'Automating Code Snippets';
  public buttonList: ElementRef[] = [];

  @ViewChildren('buttonsRefs') buttons: QueryList<ElementRef>;

  ngAfterViewInit() {
    this.buttons.forEach((el: ElementRef) => {
      this.buttonList.push(el);
    })
  }
}
