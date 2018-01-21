import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InMemoryDataService } from './services/in-memory-data.service';

@NgModule({
  imports: [CommonModule],
  declarations: [],
  providers: [InMemoryDataService]
})
export class CoreModule {}
