import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FilePondModule, registerPlugin } from 'ngx-filepond';
import { ScrollingModule } from '@angular/cdk-experimental/scrolling';

import { SharedModule } from '@ngx-starter-kit/shared';
import { ContextMenuModule } from '@ngx-starter-kit/context-menu';
import { AnimationsComponent } from './containers/animations/animations.component';
import { FileUploadComponent } from './containers/file-upload/file-upload.component';
import { HammertimeDirective } from './components/hammertime/hammertime.directive';
import { ContextMenuComponent } from './containers/context-menu/context-menu.component';


// Registering plugins
import * as FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import * as FilepondPluginFileValidateSize from 'filepond-plugin-file-validate-size';
import * as FilepondPluginImagePreview from 'filepond-plugin-image-preview';
import { VirtualScrollComponent } from './containers/virtual-scroll/virtual-scroll.component';
import { StickyTableComponent } from './containers/sticky-table/sticky-table.component';

registerPlugin(FilePondPluginFileValidateType, FilepondPluginFileValidateSize, FilepondPluginImagePreview);

@NgModule({
  imports: [
    SharedModule,
    FilePondModule,
    ContextMenuModule,
    ScrollingModule,
    RouterModule.forChild([
      /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
      { path: '', redirectTo: 'animations', pathMatch: 'full', data: { animation: 'experiments' } },
      {
        path: 'animations',
        component: AnimationsComponent,
        data: { animations: 'animations' }
      },
      {
        path: 'file-upload',
        component: FileUploadComponent,
        data: { animation: 'file-upload' }
      },
      {
        path: 'context-menu',
        component: ContextMenuComponent,
        data: { animation: 'context-menu' }
      },
      {
        path: 'virtual-scroll',
        component: VirtualScrollComponent,
        data: { animation: 'virtual-scroll' }
      },
      {
        path: 'table',
        component: StickyTableComponent,
        data: { animation: 'sticky-table' }
      }
    ])
  ],
  declarations: [
    AnimationsComponent,
    FileUploadComponent,
    HammertimeDirective,
    ContextMenuComponent,
    VirtualScrollComponent,
    StickyTableComponent
  ]
})
export class ExperimentsModule {}
