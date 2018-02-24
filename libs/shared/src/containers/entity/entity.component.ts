import {OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatDialogRef, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

import {EntityService} from './entity.service';
import {Entity, EntityColumnDef} from './entity.model';
import {map, mergeMap} from "rxjs/operators";
import 'rxjs/add/operator/mergeMap';
import {EntityFormComponent} from "./entity-form.component";
import {ComponentType} from "@angular/cdk/portal/typings/portal";

export abstract class EntitiesComponent<TEntity extends Entity, TService extends EntityService<TEntity>>
  implements OnInit {
  dataSource: MatTableDataSource<TEntity>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  readonly columns: Array<EntityColumnDef<TEntity>>;
  readonly showToolbar?: boolean = false;
  readonly showActionColumn?: boolean = false;
  readonly actionColumn?: string = 'Actions';
  abstract readonly formRef:  ComponentType<EntityFormComponent<TEntity>>;

  constructor(protected entityService: TService) {
  }

  ngOnInit() {
    this.update().subscribe();
  }

  abstract getNewEntity(): TEntity;


  getOne(id: number) {
    return this.entityService.getOne(id)
  }

  delete(item: TEntity) {
    return this.entityService.delete(item.id).pipe(
      mergeMap(_ => this.update())
    );
  }

  updateOrCreate(entity: TEntity, isNew: boolean) {
    if (isNew) {
      return this.entityService.post(entity).pipe(
        mergeMap(_ => this.update())
      );
    } else {
      return this.entityService.put(entity).pipe(
        mergeMap(_ => this.update())
      );
    }
  }

  update() {
    return this.entityService.getAll().pipe(
      map(result => {
        this.dataSource = new MatTableDataSource(result);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        this.enrichColumnDefs();
        //return nothing as we don't need.
        //return result
      })
    )
  }

  select(entity: TEntity) {
    //console.log(entity);
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  private enrichColumnDefs() {
    // if(this.columns.length === 0 && this.dataSource.data[0]) {
    //   this.columns.push( ... Object.keys(this.dataSource.data[0]).map((key) =>  { return <EntityColumnDef<TEntity>>{ 'path': key} }));
    // }
    this.columns.forEach(columnDef => {
      if (columnDef.header === undefined) {
        columnDef.header = columnDef.path;
      }
      if (columnDef.cell === undefined) {
        columnDef.cell = (row: TEntity) => row[columnDef.path];
      }
    });
  }

  get displayedColumns(): string[] {
    if (this.showActionColumn) {
      return this.columns.map(x => x.path).concat(this.actionColumn);
    } else {
      return this.columns.map(x => x.path);
    }
  }



  selectColumns() {
  }
}
