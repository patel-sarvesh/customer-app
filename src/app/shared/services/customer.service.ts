import { Injectable, } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer.model';
import { CUSTOMER_API } from '../constants';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
    constructor(private http: HttpClient) {}

    getAllCustomers() {
        return this.http.get<Customer[]>(CUSTOMER_API);
    }

    getCustomerDetails(id) {
        return this.http.get<Customer>(`${CUSTOMER_API}/${id}`);
    }

    addCustomer(data) {
        return this.http.post<Customer>(CUSTOMER_API, data );
    }
}