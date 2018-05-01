import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersPipe } from './truncate/characters.pipe';
import { WordsPipe } from './truncate/words.pipe';
import { KeysPipe } from './helper/keys.pipe';
import { SafeHtmlPipe } from './helper/saft-html.pipe';

export const PIPES = [CharactersPipe, WordsPipe, KeysPipe, SafeHtmlPipe];

@NgModule({
  imports: [CommonModule],
  declarations: [PIPES],
  exports: [PIPES]
})
export class NxPipesModule {}
