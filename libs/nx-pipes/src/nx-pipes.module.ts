import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersPipe } from './truncate/characters.pipe';
import { WordsPipe } from './truncate/words.pipe';

export const TRUNCATE_PIPES = [CharactersPipe, WordsPipe];

@NgModule({
  imports: [CommonModule],
  declarations: [TRUNCATE_PIPES],
  exports: [TRUNCATE_PIPES]
})
export class NxPipesModule {}
