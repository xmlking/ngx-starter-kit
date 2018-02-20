import {AfterViewInit, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

import { EntityService } from './entity.service';
import {EntityColumnDef, Entity} from "./entity.model";

export abstract class EntitiesComponent<TEntity extends Entity, TService extends EntityService<TEntity>> implements OnInit {
  dataSource: MatTableDataSource<TEntity>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  readonly columns: Array<EntityColumnDef<TEntity>>;
  readonly showToolbar?: boolean = false;
  readonly showActionColumn?: boolean = false;
  readonly actionColumn?: string = "Actions";

  constructor(protected entityService: TService) {}

  ngOnInit() {
    this.update();
  }

  delete(id: number) {
    this.entityService.delete(id).subscribe(
      result => {
        this.update();
      },
      error => {
        console.log(error);
      }
    );
  }

  update() {
    this.entityService.getAll().subscribe(
      result => {
        this.dataSource = new MatTableDataSource(result);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error => {
        console.log(error);
      }
    );
  }

  openDialogDetail(entity: TEntity) {
    console.log(entity)
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }


  get displayedColumns(): string[] {
    if(this.showActionColumn) {
      return this.columns.map(x => x.columnDef).concat(this.actionColumn);
    } else {
      return this.columns.map(x => x.columnDef);
    }

    // if (this.displayedDataColumns && this.actionColumn) {
    //   return [...this.displayedDataColumns, this.actionColumn];
    // } else if (this.displayedDataColumns) {
    //   return this.displayedDataColumns;
    // } else if (this.actionColumn) {
    //   return [this.actionColumn];
    // } else {
    //   return [];
    // }
  }

  add() {
    //this.router.navigate(['add', {   }]);
  }
}
