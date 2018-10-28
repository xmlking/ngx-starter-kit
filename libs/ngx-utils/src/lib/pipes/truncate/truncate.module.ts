import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersPipe } from './characters.pipe';
import { WordsPipe } from './words.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CharactersPipe, WordsPipe],
  exports: [CharactersPipe, WordsPipe]
})
export class TruncateModule { }
