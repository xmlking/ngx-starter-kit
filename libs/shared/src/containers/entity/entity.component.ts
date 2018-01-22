import { OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

import { EntityService } from '../../services/entity/entity.service';

export abstract class EntitiesComponent<TEntity, TService extends EntityService<TEntity>> implements OnInit {
  dataSource: MatTableDataSource<TEntity>;

  readonly displayedColumns: string[];

  readonly actionsColumn = 'actions';

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
      },
      error => {
        console.log(error);
      }
    );
  }
}
