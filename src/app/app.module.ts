import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { SnippetBlockComponent } from './snippet-block/snippet-block.component';
import { SnippetComponent } from './snippet-block/snippet/snippet.component';
import { CopyButtonComponent } from './snippet-block/copy-button/copy-button.component';
import { SnippetBlockService } from './snippet-block/snippet-block.service';

// --------------- ngx-clipboard ---------------//
import { ClipboardModule } from 'ngx-clipboard';

@NgModule({
   declarations: [
      AppComponent,
      SnippetBlockComponent,
      SnippetComponent,
      CopyButtonComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      ClipboardModule
   ],
   providers: [SnippetBlockService],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
