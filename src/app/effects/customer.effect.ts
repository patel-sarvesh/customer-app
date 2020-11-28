import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CustomerService } from '../shared/services/customer.service';
import { of } from 'rxjs';
import { map, mergeMap, catchError, switchMap } from 'rxjs/operators';
import { loadCustomers, loadCustomerDetails, addCustomer } from '../actions/customer/customer.actions';

@Injectable()

export class CustomerEffects {

    constructor(
        private actions$: Actions,
        private customerService: CustomerService
    ) {}

    loadCustomers$ = createEffect(() => this.actions$.pipe(
        ofType(loadCustomers),
        switchMap(() => this.customerService.getAllCustomers()
            .pipe(
                map(customers => ({ type: '[Customer] Load Customers Success', list: customers})),
                catchError((error) => of({ type: '[Customer] Load Customers Failure', error }))
            ))
        )  
    );

    loadCustomerDetails$ = createEffect(() => this.actions$.pipe(
        ofType(loadCustomerDetails),
        switchMap((action: any) => this.customerService.getCustomerDetails(action.id)
            .pipe(
                map(customer => ({ type: '[Customer] Load Customers Details Success', details: customer})),
                catchError((error) => of({ type: '[Customer] Load Customers Details Failure', error }))
            ))
        )  
    );

    addCustomer$ = createEffect(() => this.actions$.pipe(
        ofType(addCustomer),
        switchMap((action: any) => {
            this.customerService.addCustomer(action.data);
            const customersList = this.customerService.getAllCustomers();
            return of({ type: '[Customer] Load Customers Success', list: customersList});
        }),
        catchError((error) => of({ type: '[Customer] Load Customers Details Failure', error })))  
    );

}