import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-entity-table',
  templateUrl: './entity-table.component.html',
  styleUrls: ['./entity-table.component.css']
})
export class EntityTableComponent implements OnInit {
  @Output() deleted = new EventEmitter<number>();
  @Input() displayedDataColumns: string[];

  @Input() displayedExtraColumns: string[] = ['actions'];

  @Input() dataSource: MatTableDataSource<any>;

  constructor() {}

  ngOnInit() {}

  get displayedColumns(): string[] {
    if (this.displayedDataColumns && this.displayedExtraColumns) {
      return [...this.displayedDataColumns, ...this.displayedExtraColumns];
    } else if (this.displayedDataColumns) {
      return this.displayedDataColumns;
    } else if (this.displayedExtraColumns) {
      return this.displayedExtraColumns;
    } else {
      return [];
    }
  }
}
