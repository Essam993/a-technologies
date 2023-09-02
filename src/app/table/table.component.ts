import {
  Component
} from '@angular/core';


interface Customer {
  id ? : number;
  name: string;
  phone: string;
  ticketno: string;
  cost: number;
  place: string;
  seats: number;
  buy: string;
}

const CUSTOMERS: Customer[] = [{
    name: "أحمد محمود",
    phone: '0123456789',
    ticketno: 'C-101',
    cost: 40,
    place: 'سينما مصر , مول العرب , برج الأطنان , سرايا القبة ...',
    seats: 1,
    buy: 'مرة واحدة'
  },
  {
    name: "أحمد علي",
    phone: '0123456789',
    ticketno: 'C-10',
    cost: 45,
    place: 'سينما مصر , مول العرب , برج الأطنان , سرايا القبة ...',
    seats: 1,
    buy: 'مرة واحدة'
  },
  {
    name: "بهاء",
    phone: '0123456789',
    ticketno: 'C-175',
    cost: 40,
    place: 'سينما مصر , مول العرب , برج الأطنان , سرايا القبة ...',
    seats: 1,
    buy: 'مرة واحدة'
  },
  {
    name: "أحمد عصام",
    phone: '0123456789',
    ticketno: 'C-1',
    cost: 60,
    place: 'سينما مصر , مول العرب , برج الأطنان , سرايا القبة ...',
    seats: 2,
    buy: 'مرة واحدة'
  },
  {
    name: "أحمد علاء",
    phone: '0123456789',
    ticketno: 'C-160',
    cost: 50,
    place: 'سينما مصر , مول العرب , برج الأطنان , سرايا القبة ...',
    seats: 1,
    buy: 'مرة واحدة'
  },
  {
    name: "أحمد صابر",
    phone: '0123456789',
    ticketno: 'C-11',
    cost: 30,
    place: 'سينما مصر , مول العرب , برج الأطنان , سرايا القبة ...',
    seats: 2,
    buy: 'مرة واحدة'
  },
  {
    name: "أحمد هاني",
    phone: '0123456789',
    ticketno: 'C-141',
    cost: 50,
    place: 'سينما مصر , مول العرب , برج الأطنان , سرايا القبة ...',
    seats: 1,
    buy: 'مرة واحدة'
  },
  {
    name: "أحمد محمد",
    phone: '0123456789',
    ticketno: 'C-131',
    cost: 40,
    place: 'سينما مصر , مول العرب , برج الأطنان , سرايا القبة ...',
    seats: 1,
    buy: 'مرة واحدة'
  },
  {
    name: "بهاء محمود",
    phone: '0123456789',
    ticketno: 'C-15',
    cost: 30,
    place: 'سينما مصر , مول العرب , برج الأطنان , سرايا القبة ...',
    seats: 1,
    buy: 'مرة واحدة'
  },
  {
    name: "اسلام احمد",
    phone: '0123456789',
    ticketno: 'C-151',
    cost: 420,
    place: 'سينما مصر , مول العرب , برج الأطنان , سرايا القبة ...',
    seats: 8,
    buy: 'مرة واحدة'
  },
  {
    name: "أحمد رامي",
    phone: '0123456789',
    ticketno: 'C-50',
    cost: 60,
    place: 'سينما مصر , مول العرب , برج الأطنان , سرايا القبة ...',
    seats: 2,
    buy: 'مرة واحدة'
  },
  {
    name: "كمال محمود",
    phone: '0123456789',
    ticketno: 'C-18',
    cost: 40,
    place: 'سينما مصر , مول العرب , برج الأطنان , سرايا القبة ...',
    seats: 1,
    buy: 'مرة واحدة'
  },
  {
    name: "احمد كمال",
    phone: '0123456789',
    ticketno: 'C-120',
    cost: 40,
    place: 'سينما مصر , مول العرب , برج الأطنان , سرايا القبة ...',
    seats: 1,
    buy: 'مرة واحدة'
  },
];


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.less']
})

export class TableComponent {

  page = 1;
  pageSize = 4;
  collectionSize = CUSTOMERS.length;
  customers: Customer[] | undefined;

  constructor() {
    this.refreshCustomers();
  }

  refreshCustomers() {
    this.customers = CUSTOMERS.map((customer, i) => ({
      id: i + 1,
      ...customer
    })).slice(
      (this.page - 1) * this.pageSize,
      (this.page - 1) * this.pageSize + this.pageSize,
    );
  }

}
