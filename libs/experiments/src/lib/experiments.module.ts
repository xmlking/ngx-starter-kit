import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FilePondModule, registerPlugin } from 'ngx-filepond';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { KnobModule } from '@xmlking/ngx-knob';
import { InViewportModule } from '@ngx-starter-kit/ngx-utils';

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
import { LayoutComponent } from './containers/layout/layout.component';
import { CardComponent } from './components/card/card.component';
import { ViewportComponent } from './containers/viewport/viewport.component';

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
    ScrollingModule,
    ClapModule,
    LedModule,
    KnobModule,
    InViewportModule,
    ImageComparisonModule,
    RouterModule.forChild([
      /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
      { path: '', redirectTo: 'animations', pathMatch: 'full' },
      {
        path: 'animations',
        component: AnimationsComponent,
        data: { title: 'Animations', depth: 2 },
      },
      {
        path: 'file-upload',
        component: FileUploadComponent,
        data: { title: 'File Upload', depth: 3 },
      },
      {
        path: 'context-menu',
        component: ContextMenuComponent,
        data: { title: 'Context Menu', depth: 3 },
      },
      {
        path: 'virtual-scroll',
        component: VirtualScrollComponent,
        data: { title: 'Virtual Scroll', depth: 3 },
      },
      {
        path: 'table',
        component: StickyTableComponent,
        data: { title: 'Sticky Table', depth: 3 },
      },
      {
        path: 'clap',
        component: ClapButtonComponent,
        data: { title: 'Clap', depth: 3 },
      },
      {
        path: 'led',
        component: LedDemoComponent,
        data: { title: 'Led', depth: 3 },
      },
      {
        path: 'knob',
        component: KnobDemoComponent,
        data: { title: 'Knob', depth: 3 },
      },
      {
        path: 'image-comp',
        component: ImageCompComponent,
        data: { title: 'ImageComp', depth: 3 },
      },
      {
        path: 'layout',
        component: LayoutComponent,
        data: { title: 'Layout', depth: 3 },
      },
      {
        path: 'viewport',
        component: ViewportComponent,
        data: { title: 'Viewport', depth: 3 },
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
    ViewportComponent,
  ],
})
export class ExperimentsModule {}
