import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClapComponent } from './clap.component';
import { CounterBubbleComponent } from './components/counter-bubble.component';
import { TotalCounterComponent } from './components/total-counter.component';
import { FabComponent } from './components/fab.component';
@NgModule({
  imports: [CommonModule],
  declarations: [ClapComponent, CounterBubbleComponent, TotalCounterComponent, FabComponent],
  exports: [ClapComponent],
})
export class ClapModule {}
