import { AfterViewInit, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

import { EntityService } from './entity.service';
import { Entity, EntityColumnDef } from './entity.model';
import { map, mergeMap, debounceTime, distinctUntilChanged, concatMap } from 'rxjs/operators';
import { fromEvent, Observable, OperatorFunction } from 'rxjs';
import { EntityFormComponent } from './entity-form.component';
import { ComponentType } from '@angular/cdk/portal/typings/portal';
import { SelectionModel } from '@angular/cdk/collections';

export abstract class EntitiesComponent<TEntity extends Entity, TService extends EntityService<TEntity>>
  implements OnInit, AfterViewInit {
  dataSource = new MatTableDataSource<TEntity>([]);
  selection = new SelectionModel<TEntity>(true, []);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('filter') filterRef: ElementRef;

  readonly loading$;
  readonly columns: Array<EntityColumnDef<TEntity>>;
  readonly title?: string = null;
  readonly showToolbar?: boolean = false;
  readonly showActionColumn?: boolean = false;
  readonly showSelectColumn?: boolean = false;
  readonly actionColumn?: string = 'Actions';
  readonly selectColumn?: string = 'select';
  //TODO: make them optional abstract
  readonly formRef?: ComponentType<EntityFormComponent<TEntity>>;
  getNewEntity?(): TEntity;
  filterPredicate?(entity: TEntity, filter: string): boolean;
  //TODO: make them optional abstract end

  constructor(protected entityService: TService) {
    this.loading$ = entityService.loading$;
  }

  ngOnInit() {
    this.update().subscribe();
    if (this.filterPredicate) {
      this.dataSource.filterPredicate = this.filterPredicate;
    }

    // fromEvent(this.filterRef.nativeElement, 'keyup')
    //   .pipe(
    //     debounceTime(150),
    //     distinctUntilChanged()
    //   ).subscribe(() => {
    //   this.paginator.pageIndex = 0;
    //   this.applyFilter(this.filterRef.nativeElement.value)
    // });
  }

  ngAfterViewInit() {
    // Needs to be set up after the view is initialized since the data source will look at the sort
    // and paginator's initial values to know what data should be rendered.
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  getById(id: number) {
    return this.entityService.getById(id);
  }

  delete(item: TEntity) {
    return this.entityService.delete(item.id).pipe(concatMap(_ => this.update()));
  }

  updateOrCreate(entity: TEntity, isNew: boolean) {
    if (isNew) {
      return this.entityService.post(entity).pipe(concatMap(_ => this.update()));
    } else {
      return this.entityService.put(entity).pipe(concatMap(_ => this.update()));
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
    );
  }

  /** Whether all filtered rows are selected. */
  isAllFilteredRowsSelected() {
    return this.dataSource.filteredData.every(data => this.selection.isSelected(data));
  }

  /** Whether the selection it totally matches the filtered rows. */
  isMasterToggleChecked() {
    return (
      this.selection.hasValue() &&
      this.isAllFilteredRowsSelected() &&
      this.selection.selected.length >= this.dataSource.filteredData.length
    );
  }

  /**
   * Whether there is a selection that doesn't capture all the
   * filtered rows there are no filtered rows displayed.
   */
  isMasterToggleIndeterminate() {
    return this.selection.hasValue() && (!this.isAllFilteredRowsSelected() || !this.dataSource.filteredData.length);
  }

  /** Selects all filtered rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    if (this.isMasterToggleChecked()) {
      this.selection.clear();
    } else {
      this.dataSource.filteredData.forEach(data => this.selection.select(data));
    }
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
    let _displayedColumns = this.columns.map(x => x.path);

    if (this.showSelectColumn) {
      _displayedColumns.unshift(this.selectColumn);
    }
    if (this.showActionColumn) {
      _displayedColumns = _displayedColumns.concat(this.actionColumn);
    }
    return _displayedColumns;
  }

  selectRow(entity: TEntity) {
    if (this.showSelectColumn) {
      this.selection.toggle(entity);
    }
  }

  selectColumns() {
    //TODO
  }
}
