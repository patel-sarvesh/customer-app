import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectError } from './reducers/customer.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'customer-app';
  errorMsg$: Observable<any>;

  constructor(
    private store: Store<{ customer: { error: any }}>,
    private activatedRoute: ActivatedRoute
  ) {
    this.errorMsg$ = this.store.pipe(select(selectError));
  }
  
}
