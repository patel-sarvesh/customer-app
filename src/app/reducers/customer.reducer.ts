import { createReducer, on } from '@ngrx/store';
import { 
    loadCustomersSuccess, 
    loadCustomersFailure,
    loadCustomerDetailsSuccess,
    loadCustomersDetailsFailure
} from '../actions/customer/customer.actions';
import { Customer } from '../shared/models/customer.model';

export interface CustomerState {
    customer: {
        list: Customer[];
        details: Customer;
        error: string;
    }
  }

export const initialCustomerState: CustomerState = {
    customer: {
        list: [],
        details: null,
        error: '',
    }
};



export const CustomerReducer = createReducer(
    initialCustomerState,
    on(loadCustomersSuccess, (state, action) => ({
        ...state,
        list: action.list
    })),
    on(loadCustomersFailure, (state, action) => ({
        ...state,
        error: action.error
    })),
    on(loadCustomerDetailsSuccess, (state, action) => ({
        ...state,
        details: action.details
    })),
    on(loadCustomersDetailsFailure, (state, action) => ({
        ...state,
        error: action.error
    }))
);

export const selectCustomers = (state: CustomerState) => state.customer.list;
export const selectCustomer = (state: CustomerState) => state.customer.details;
export const selectError = (state: CustomerState) => state.customer.error;