import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Customer } from './shared/models/customer.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'customer-app';
  
  constructor(private store: Store<{ state: Customer }>) {}

}
