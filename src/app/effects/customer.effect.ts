import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CustomerService } from '../shared/services/customer.service';
import { of } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';
import { loadCustomers, loadCustomerDetails, addCustomer } from '../actions/customer/customer.actions';
import { NotificationService } from '../shared/services/toastr.service';
import {
    LOAD_CUSTOMER,
    LOAD_CUSTOMER_DETAILS,
    CUSTOMERS_LOAD_FAIL,
    CUSTOMER_LOAD_FAIL,
    CUSTOMERS_LOAD_SUCCESS,
    CUSTOMER_LOAD_SUCCESS,
    ADD_CUSTOMER
  } from '../shared/constants';


@Injectable()

export class CustomerEffects {

    constructor(
        private actions$: Actions,
        private customerService: CustomerService,
        private notificationService: NotificationService
    ) {}

    loadCustomers$ = createEffect(() => this.actions$.pipe(
        ofType(loadCustomers),
        switchMap(() => this.customerService.getAllCustomers()
            .pipe(
                map(customers => {
                    this.notificationService.showSuccess(CUSTOMERS_LOAD_SUCCESS, 'Success');
                    return ({ type: CUSTOMERS_LOAD_SUCCESS, list: customers})
                }),
                catchError((error) => {
                    this.notificationService.showError(CUSTOMERS_LOAD_FAIL, 'Error');
                    return of({ type: CUSTOMERS_LOAD_FAIL, error });
                })
            ))
        )  
    );

    loadCustomerDetails$ = createEffect(() => this.actions$.pipe(
        ofType(loadCustomerDetails),
        switchMap((action: any) => this.customerService.getCustomerDetails(action.id)
            .pipe(
                map(customer => {
                    this.notificationService.showSuccess(CUSTOMER_LOAD_SUCCESS, 'Success');
                    return ({ type: CUSTOMER_LOAD_SUCCESS, details: customer});
                }),
                catchError((error) => {
                    this.notificationService.showError(CUSTOMER_LOAD_FAIL, 'Error');
                    return of({ type: CUSTOMER_LOAD_FAIL, error });
                })
            ))
        )  
    );

    addCustomer$ = createEffect(() => this.actions$.pipe(
        ofType(addCustomer),
        switchMap((action: any) => {
            this.customerService.addCustomer(action.data);
            const customersList = this.customerService.getAllCustomers();
            this.notificationService.showSuccess(ADD_CUSTOMER, 'Success');
            return of({ type: CUSTOMERS_LOAD_SUCCESS, list: customersList});
        }),
        catchError((error) => {
            this.notificationService.showError(CUSTOMERS_LOAD_FAIL, 'Error');
            return of({ type: CUSTOMERS_LOAD_FAIL, error });
        }))
    );

}