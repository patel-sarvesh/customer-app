import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../shared/models/customer.model';
import { select, Store } from '@ngrx/store';
import { selectCustomers } from '../reducers/customer.reducer';
import { loadCustomers } from '../actions/customer/customer.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  customersList$: Observable<Customer[]>;

  constructor(private store: Store<{ customer: { list: Customer[] }}>) { 
    this.customersList$ = this.store.pipe(select(selectCustomers));
  }

  ngOnInit(): void {
    this.store.dispatch(loadCustomers());
  }

}
