import { SelectionChange, SelectionModel } from '@angular/cdk/collections';
import { ComponentType } from '@angular/cdk/portal';
import { AfterViewInit, Directive, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { untilDestroy } from '@ngx-starter-kit/ngx-utils';
import { parseISO } from 'date-fns';
import { Observable } from 'rxjs';
import { concatMap, filter, map } from 'rxjs/operators';
import { EntityFormComponent } from './entity-form.component';
import { Entity, EntityColumnDef } from './entity.model';
import { EntityService } from './entity.service';
@Directive()
// tslint:disable-next-line: directive-class-suffix
export abstract class EntitiesComponent<TEntity extends Entity, TService extends EntityService<TEntity>>
  implements OnInit, OnDestroy, AfterViewInit {
  dataSource = new MatTableDataSource<TEntity>([]);
  selection = new SelectionModel<TEntity>(false, []);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild('filter', { static: true }) filterRef: ElementRef;

  readonly loading$;
  readonly columns: Array<EntityColumnDef<TEntity>>;
  readonly title?: string = null;
  readonly showToolbar?: boolean = false;
  readonly showColumnFilter?: boolean = false;
  readonly showActionColumn?: boolean = false;
  readonly maxSelectable?: number = 1;
  readonly actionColumn?: string = 'Actions';
  readonly selectColumn?: string = 'select';
  // TODO: make them optional abstract
  readonly formRef?: ComponentType<EntityFormComponent<TEntity>>;
  getNewEntity?(): TEntity;
  filterPredicate?(entity: TEntity, filter: string): boolean;
  // TODO: make them optional abstract end

  constructor(protected entityService: TService) {
    this.loading$ = entityService.loading$;
  }

  ngOnInit() {
    this.selection = new SelectionModel<TEntity>(this.maxSelectable > 1, []);

    this.update().subscribe();
    if (this.filterPredicate) {
      this.dataSource.filterPredicate = this.filterPredicate;
    }

    // remove first selected entity if more then max selected.
    if (this.maxSelectable > 1) {
      // is multi select mode?
      this.selection.changed
        .pipe(
          // tap(console.log),
          filter((sc: SelectionChange<TEntity>) => sc.added.length > 0),
          filter((_) => this.selection.selected.length > this.maxSelectable),
          untilDestroy(this)
        )
        .subscribe((_) => this.selection.deselect(this.selection.selected.shift()));
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

  ngOnDestroy() {}

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
    return this.entityService.delete(item.id).pipe(concatMap((_) => this.update()));
  }

  updateOrCreate(entity: TEntity, id: number) {
    if (id) {
      return this.entityService.put(id, entity).pipe(concatMap((_) => this.update()));
    } else {
      return this.entityService.post(entity).pipe(concatMap((_) => this.update()));
    }
  }

  /**
   * Overwrite this method, to get the data your way.
   */
  getData(): Observable<TEntity[]> {
    return this.entityService.getAll();
  }

  protected update() {
    return this.getData().pipe(
      map((result) => {
        this.dataSource = new MatTableDataSource<TEntity>(result);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        // return nothing as we don't need.
        // return result
      })
    );
  }

  /** Whether all filtered rows are selected. */
  isAllFilteredRowsSelected() {
    return this.dataSource.filteredData.every((data) => this.selection.isSelected(data));
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
      this.dataSource.filteredData.forEach((data) => this.selection.select(data));
    }
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  get displayedColumns(): string[] {
    // prettier-ignore
    let displayedColumns = this.columns
      .filter(column => column.visible)
      .map(x => x.property);

    if (this.maxSelectable > 0) {
      displayedColumns.unshift(this.selectColumn);
    }
    if (this.showActionColumn) {
      displayedColumns = displayedColumns.concat(this.actionColumn);
    }
    return displayedColumns;
  }

  selectRow(entity: TEntity) {
    if (this.maxSelectable > 0) {
      this.selection.toggle(entity);
      if (this.selection.isSelected(entity)) {
        this.showDetails(entity);
      } else {
        this.showDetails(undefined);
      }
    }
  }

  getRouteAnimation(outlet) {
    return outlet.activatedRouteData.depth || 5;
    // return outlet.isActivated ? outlet.activatedRoute : ''
  }

  /**
   * will be called with entity or undefined
   */
  showDetails(entity: TEntity) {}

  toggleColumnVisibility(column, event) {
    event.stopPropagation();
    event.stopImmediatePropagation();
    column.visible = !column.visible;
  }

  protected stringToDate(date: string | number | Date): number | Date {
    function isString(x: any) {
      return Object.prototype.toString.call(x) === '[object String]';
    }
    return isString(date) ? parseISO(date as string) : (date as number | Date);
  }
}
