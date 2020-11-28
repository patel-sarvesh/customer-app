import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { Customer } from 'src/app/shared/models/customer.model';
import { select, Store } from '@ngrx/store';
import { selectCustomer } from 'src/app/reducers/customer.reducer';
import { loadCustomerDetails } from '../../actions/customer/customer.actions';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.scss']
})
export class CustomerDetailsComponent implements OnInit {
  customerDetails$: Observable<Customer>;
  constructor(
    private store: Store<{ customer: { details: Customer }}>,
    private activatedRoute: ActivatedRoute
  ) {
    this.customerDetails$ = this.store.pipe(select(selectCustomer));
  }

  ngOnInit(): void {
    const customerId = this.activatedRoute.snapshot.params.id;
    this.store.dispatch(loadCustomerDetails({ id: customerId }));
  }
}
