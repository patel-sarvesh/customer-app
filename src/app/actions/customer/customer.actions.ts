import { createAction, props } from '@ngrx/store';
import { Customer } from 'src/app/shared/models/customer.model';

export const loadCustomers = createAction(
  '[Customer] Load Customers'
);

export const loadCustomersSuccess = createAction(
  '[Customer] Load Customers Success',
  props<{ list: Customer[] }>()
);

export const loadCustomersFailure = createAction(
  '[Customer] Load Customers Failure',
  props<{ error: any }>()
);

export const loadCustomerDetails = createAction(
  '[Customer] Load Customer Details',
  props<{ id: string }>()
)

export const loadCustomerDetailsSuccess = createAction(
  '[Customer] Load Customer Details Success',
  props<{ details: Customer }>()
)

export const loadCustomersDetailsFailure = createAction(
  '[Customer] Load Customers Details Failure',
  props<{ error: any }>()
);

export const addCustomer = createAction(
  '[Customer] Add Customer',
  props<{ data: Customer }>()
)

export const addCustomerError = createAction(
  '[Customer] Add Customer Failure',
  props<{ error: any }>()
)