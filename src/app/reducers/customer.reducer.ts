import { createReducer, on } from '@ngrx/store';
import { strict } from 'assert';
import { 
    loadCustomers, 
    loadCustomersSuccess, 
    loadCustomersFailure,
    loadCustomerDetails,
    loadCustomerDetailsSuccess,
    loadCustomersDetailsFailure
} from '../actions/customer/customer.actions';
import { Customer } from '../shared/models/customer.model';

export interface CustomerState {
    customerData: Customer| null;
    error: string | null
  }

export const initialCustomerState: CustomerState = {
    customerData: null,
    error: null
};

   
  export function customerReducer(state: CustomerState = initialCustomerState, action): CustomerState {
    switch (action.type) {
        case loadCustomers:
            return {
                customerData: action.payload.customerData,
                error: null
            };
        default:
            return state;
    };
  }