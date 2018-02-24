import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {Entity} from './entity.model';
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {catchError} from "rxjs/operators";
import {EntityService} from "./entity.service";
import {CollectionViewer, DataSource} from "@angular/cdk/collections";

export abstract class EntityDataSource<TEntity extends Entity, TService extends EntityService<TEntity>> implements DataSource<TEntity> {

  private entitiesSubject: BehaviorSubject<Array<TEntity>> = new BehaviorSubject([]);

  constructor(protected entityService: TService) {
  }

  load(filter:string,
       sortDirection:string,
       pageIndex:number,
       pageSize:number) {
    this.entityService.findAll(filter, sortDirection,
      pageIndex, pageSize).pipe(
      catchError(() => of([])),
    ).subscribe(entities => this.entitiesSubject.next(entities));

  }

  connect(collectionViewer: CollectionViewer): Observable<TEntity[]> {
    console.log("Connecting data source");
    return this.entitiesSubject.asObservable();
  }

  disconnect(collectionViewer: CollectionViewer): void {
    this.entitiesSubject.complete();
  }

}
