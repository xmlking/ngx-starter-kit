import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FilePondModule, registerPlugin } from 'ngx-filepond';
import { ScrollingModule as ExperimentalScrollingModule } from '@angular/cdk-experimental/scrolling';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { KnobModule } from '@xmlking/ngx-knob';

import { ClapModule } from '@ngx-starter-kit/clap';
import { LedModule } from '@ngx-starter-kit/led';
import { ImageComparisonModule } from '@ngx-starter-kit/image-comparison';
import { SharedModule } from '@ngx-starter-kit/shared';
import { ContextMenuModule } from '@ngx-starter-kit/context-menu';
import { AnimationsComponent } from './containers/animations/animations.component';
import { FileUploadComponent } from './containers/file-upload/file-upload.component';
import { HammertimeDirective } from './components/hammertime/hammertime.directive';
import { ContextMenuComponent } from './containers/context-menu/context-menu.component';
import { ClapButtonComponent } from './containers/clap-button/clap-button.component';
import { KnobDemoComponent } from './containers/knob-demo/knob-demo.component';
import { VirtualScrollComponent } from './containers/virtual-scroll/virtual-scroll.component';
import { StickyTableComponent } from './containers/sticky-table/sticky-table.component';
import { LedDemoComponent } from './containers/led-demo/led-demo.component';
import { ImageCompComponent } from './containers/image-comp/image-comp.component';

// Registering plugins
import * as FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import * as FilepondPluginFileValidateSize from 'filepond-plugin-file-validate-size';
import * as FilepondPluginImagePreview from 'filepond-plugin-image-preview';

registerPlugin(FilePondPluginFileValidateType, FilepondPluginFileValidateSize, FilepondPluginImagePreview);

@NgModule({
  imports: [
    SharedModule,
    FilePondModule,
    ContextMenuModule,
    ExperimentalScrollingModule,
    ScrollingModule,
    ClapModule,
    LedModule,
    KnobModule,
    ImageComparisonModule,
    RouterModule.forChild([
      /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
      { path: '', redirectTo: 'animations', pathMatch: 'full', data: { animation: 'experiments' } },
      {
        path: 'animations',
        component: AnimationsComponent,
        data: { animations: 'animations' },
      },
      {
        path: 'file-upload',
        component: FileUploadComponent,
        data: { animation: 'file-upload' },
      },
      {
        path: 'context-menu',
        component: ContextMenuComponent,
        data: { animation: 'context-menu' },
      },
      {
        path: 'virtual-scroll',
        component: VirtualScrollComponent,
        data: { animation: 'virtual-scroll' },
      },
      {
        path: 'table',
        component: StickyTableComponent,
        data: { animation: 'sticky-table' },
      },
      {
        path: 'clap',
        component: ClapButtonComponent,
        data: { animation: 'clap' },
      },
      {
        path: 'led',
        component: LedDemoComponent,
        data: { animation: 'led' },
      },
      {
        path: 'knob',
        component: KnobDemoComponent,
        data: { animation: 'Knob' },
      },
      {
        path: 'image-comp',
        component: ImageCompComponent,
        data: { animation: 'imagecomp' },
      },
    ]),
  ],
  declarations: [
    AnimationsComponent,
    FileUploadComponent,
    HammertimeDirective,
    ContextMenuComponent,
    VirtualScrollComponent,
    StickyTableComponent,
    ClapButtonComponent,
    KnobDemoComponent,
    LedDemoComponent,
    ImageCompComponent,
  ],
})
export class ExperimentsModule {}
