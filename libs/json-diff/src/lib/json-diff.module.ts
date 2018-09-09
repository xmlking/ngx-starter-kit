import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JsonDiffTreeComponent } from './json-diff-tree.component';
import { JsonDiffComponent } from './json-diff.component';

@NgModule({
  imports: [CommonModule],
  declarations: [JsonDiffComponent, JsonDiffTreeComponent],
  exports: [JsonDiffComponent],
})
export class JsonDiffModule {}
