import { createAction, props } from '@ngrx/store';

export const loadCustomers = createAction(
  '[Customer] Load Customers'
);

export const loadCustomersSuccess = createAction(
  '[Customer] Load Customers Success',
  props<{ data: any }>()
);

export const loadCustomersFailure = createAction(
  '[Customer] Load Customers Failure',
  props<{ error: any }>()
);

export const loadCustomerDetails = createAction(
  '[Customer] Load Customer Details'
)

export const loadCustomerDetailsSuccess = createAction(
  '[Customer] Load Customer Details Success',
  props<{ data: any }>()
)

export const loadCustomersDetailsFailure = createAction(
  '[Customer] Load Customers Details Failure',
  props<{ error: any }>()
);