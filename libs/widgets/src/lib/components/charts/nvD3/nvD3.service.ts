import { Injectable } from '@angular/core';
import * as d3 from 'd3';
import * as Nv from 'nvd3';

export type D3 = typeof d3;
export type Nv = typeof Nv;

@Injectable()
export class D3ChartService {
  constructor() {}

  public getD3(): D3 {
    return d3;
  }

  public getNv(): Nv {
    return Nv;
  }
}
