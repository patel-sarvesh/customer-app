import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormGroup, FormControl } from '@angular/forms';

import { addCustomer } from 'src/app/actions/customer/customer.actions';
import { Customer } from 'src/app/shared/models/customer.model';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss']
})
export class AddCustomerComponent implements OnInit { 
  addCustomerForm = new FormGroup({
    name: new FormControl(''),
    phone: new FormControl(''),
    address: new FormControl(''),
    email: new FormControl(''),
  });

  constructor(private store: Store<{ customer: { list: Customer[] }}>) { }

  ngOnInit(): void {
  }

  onSubmit() {
    const filledValue = this.addCustomerForm.controls;
    const newCustomer: Customer = {
        name: filledValue.name.value,
        phone: filledValue.phone.value,
        email: filledValue.email.value,
        address: filledValue.address.value
    };
    this.store.dispatch(
      addCustomer({ data: newCustomer })
    );
    this.addCustomerForm.reset();
  }

}
