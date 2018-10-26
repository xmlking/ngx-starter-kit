import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FilePondModule, registerPlugin } from 'ngx-filepond';
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
import { LayoutComponent } from './containers/layout/layout.component';
import { CardComponent } from './components/card/card.component';

registerPlugin(FilePondPluginFileValidateType, FilepondPluginFileValidateSize, FilepondPluginImagePreview);

@NgModule({
  imports: [
    SharedModule,
    FilePondModule,
    ContextMenuModule,
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
        data: { title: 'Animations', animations: 'animations' },
      },
      {
        path: 'file-upload',
        component: FileUploadComponent,
        data: { title: 'File Upload', animation: 'file-upload' },
      },
      {
        path: 'context-menu',
        component: ContextMenuComponent,
        data: { title: 'Context Menu', animation: 'context-menu' },
      },
      {
        path: 'virtual-scroll',
        component: VirtualScrollComponent,
        data: { title: 'Virtual Scroll', animation: 'virtual-scroll' },
      },
      {
        path: 'table',
        component: StickyTableComponent,
        data: { title: 'Sticky Table', animation: 'sticky-table' },
      },
      {
        path: 'clap',
        component: ClapButtonComponent,
        data: { title: 'Clap', animation: 'clap' },
      },
      {
        path: 'led',
        component: LedDemoComponent,
        data: { title: 'Led', animation: 'led' },
      },
      {
        path: 'knob',
        component: KnobDemoComponent,
        data: { title: 'Knob', animation: 'Knob' },
      },
      {
        path: 'image-comp',
        component: ImageCompComponent,
        data: { title: 'ImageComp', animation: 'imagecomp' },
      },
      {
        path: 'layout',
        component: LayoutComponent,
        data: { title: 'Layout', animation: 'layout' },
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
    LayoutComponent,
    CardComponent,
  ],
})
export class ExperimentsModule {}
