import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import * as Hammer from 'hammerjs';
import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { FilePondModule, registerPlugin } from 'angular-filepond';

import { SharedModule } from '@nx-starter-kit/shared';
import { UploadModule } from '@nx-starter-kit/upload';
import { AnimationsComponent } from './containers/animations/animations.component';
import { FileUploadComponent } from './containers/file-upload/file-upload.component';
import { HammertimeDirective } from './components/hammertime/hammertime.directive';

export class MyHammerConfig extends HammerGestureConfig {
  overrides = <any>{
    // override hammerjs default configuration
    swipe: { direction: Hammer.DIRECTION_ALL }
  };
}

// Registering plugins
import * as FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import * as FilepondPluginFileValidateSize from 'filepond-plugin-file-validate-size';
import * as FilepondPluginImagePreview from 'filepond-plugin-image-preview';

registerPlugin(FilePondPluginFileValidateType, FilepondPluginFileValidateSize, FilepondPluginImagePreview);

@NgModule({
  imports: [
    SharedModule,
    UploadModule,
    FilePondModule,
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
        path: 'experiment3',
        component: AnimationsComponent,
        data: { animation: 'experiment3' }
      }
    ])
  ],
  providers: [
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: MyHammerConfig
    }
  ],
  declarations: [AnimationsComponent, FileUploadComponent, HammertimeDirective]
})
export class ExperimentsModule {}
