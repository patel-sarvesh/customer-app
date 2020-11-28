import { createAction, props } from '@ngrx/store';
import { Customer } from 'src/app/shared/models/customer.model';
import {
  LOAD_CUSTOMER,
  LOAD_CUSTOMER_DETAILS,
  CUSTOMERS_LOAD_FAIL,
  CUSTOMER_LOAD_FAIL,
  CUSTOMERS_LOAD_SUCCESS,
  CUSTOMER_LOAD_SUCCESS,
  ADD_CUSTOMER
} from '../../shared/constants';

export const loadCustomers = createAction(
  LOAD_CUSTOMER
);

export const loadCustomersSuccess = createAction(
  CUSTOMERS_LOAD_SUCCESS,
  props<{ list: Customer[] }>()
);

export const loadCustomersFailure = createAction(
  CUSTOMERS_LOAD_FAIL,
  props<{ error: any }>()
);

export const loadCustomerDetails = createAction(
  LOAD_CUSTOMER_DETAILS,
  props<{ id: string }>()
)

export const loadCustomerDetailsSuccess = createAction(
  CUSTOMER_LOAD_SUCCESS,
  props<{ details: Customer }>()
)

export const loadCustomersDetailsFailure = createAction(
  CUSTOMER_LOAD_FAIL,
  props<{ error: any }>()
);

export const addCustomer = createAction(
  ADD_CUSTOMER,
  props<{ data: Customer }>()
)