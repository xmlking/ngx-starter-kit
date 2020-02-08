import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgViewerComponent } from './svg-viewer.component';
import { SvgViewerService } from './svg-viewer.service';
import { SvgViewerConfig, SvgViewerDefaultConfig } from './svg-viewer.config';

@NgModule({
  imports: [CommonModule],
  exports: [SvgViewerComponent],
  providers: [SvgViewerService, { provide: SvgViewerConfig, useClass: SvgViewerDefaultConfig }],
  declarations: [SvgViewerComponent],
})
export class SvgViewerModule {
  static forRoot(config: SvgViewerConfig): ModuleWithProviders<SvgViewerModule> {
    return {
      ngModule: SvgViewerModule,
      providers: [{ provide: SvgViewerConfig, useValue: config }],
    };
  }
}
