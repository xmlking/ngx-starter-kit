import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Crumb } from '@ngx-starter-kit/breadcrumbs';

interface State {
  name: string;
  capital: string;
}

@Component({
  selector: 'ngx-virtual-scroll',
  templateUrl: './virtual-scroll.component.html',
  styleUrls: ['./virtual-scroll.component.scss'],
})
export class VirtualScrollComponent implements OnInit {
  crumbs: ReadonlyArray<Crumb> = [
    { name: 'Dashboard', link: '/dashboard' },
    { name: 'Experiments', link: '/dashboard/experiments' },
    { name: 'Virtual Scroll' },
  ];
  observableData = new BehaviorSubject<number[]>([]);
  states = [
    { name: 'Alabama', capital: 'Montgomery' },
    { name: 'Alaska', capital: 'Juneau' },
    { name: 'Arizona', capital: 'Phoenix' },
    { name: 'Arkansas', capital: 'Little Rock' },
    { name: 'California', capital: 'Sacramento' },
    { name: 'Colorado', capital: 'Denver' },
    { name: 'Connecticut', capital: 'Hartford' },
    { name: 'Delaware', capital: 'Dover' },
    { name: 'Florida', capital: 'Tallahassee' },
    { name: 'Georgia', capital: 'Atlanta' },
    { name: 'Hawaii', capital: 'Honolulu' },
    { name: 'Idaho', capital: 'Boise' },
    { name: 'Illinois', capital: 'Springfield' },
    { name: 'Indiana', capital: 'Indianapolis' },
    { name: 'Iowa', capital: 'Des Moines' },
    { name: 'Kansas', capital: 'Topeka' },
    { name: 'Kentucky', capital: 'Frankfort' },
    { name: 'Louisiana', capital: 'Baton Rouge' },
    { name: 'Maine', capital: 'Augusta' },
    { name: 'Maryland', capital: 'Annapolis' },
    { name: 'Massachusetts', capital: 'Boston' },
    { name: 'Michigan', capital: 'Lansing' },
    { name: 'Minnesota', capital: 'St. Paul' },
    { name: 'Mississippi', capital: 'Jackson' },
    { name: 'Missouri', capital: 'Jefferson City' },
    { name: 'Montana', capital: 'Helena' },
    { name: 'Nebraska', capital: 'Lincoln' },
    { name: 'Nevada', capital: 'Carson City' },
    { name: 'New Hampshire', capital: 'Concord' },
    { name: 'New Jersey', capital: 'Trenton' },
    { name: 'New Mexico', capital: 'Santa Fe' },
    { name: 'New York', capital: 'Albany' },
    { name: 'North Carolina', capital: 'Raleigh' },
    { name: 'North Dakota', capital: 'Bismarck' },
    { name: 'Ohio', capital: 'Columbus' },
    { name: 'Oklahoma', capital: 'Oklahoma City' },
    { name: 'Oregon', capital: 'Salem' },
    { name: 'Pennsylvania', capital: 'Harrisburg' },
    { name: 'Rhode Island', capital: 'Providence' },
    { name: 'South Carolina', capital: 'Columbia' },
    { name: 'South Dakota', capital: 'Pierre' },
    { name: 'Tennessee', capital: 'Nashville' },
    { name: 'Texas', capital: 'Austin' },
    { name: 'Utah', capital: 'Salt Lake City' },
    { name: 'Vermont', capital: 'Montpelier' },
    { name: 'Virginia', capital: 'Richmond' },
    { name: 'Washington', capital: 'Olympia' },
    { name: 'West Virginia', capital: 'Charleston' },
    { name: 'Wisconsin', capital: 'Madison' },
    { name: 'Wyoming', capital: 'Cheyenne' },
  ];
  statesObservable = new BehaviorSubject(this.states);
  indexTrackFn = (index: number) => index;
  nameTrackFn = (_: number, item: State) => item.name;

  constructor() {
    this.emitData();
  }

  ngOnInit() {}

  emitData() {
    const data = this.observableData.value.concat([50]);
    this.observableData.next(data);
  }

  sortBy(prop: 'name' | 'capital') {
    this.statesObservable.next(
      this.states
        .map(s => ({ ...s }))
        .sort((a, b) => {
          const aProp = a[prop],
            bProp = b[prop];
          if (aProp < bProp) {
            return -1;
          } else if (aProp > bProp) {
            return 1;
          }
          return 0;
        }),
    );
  }
}
