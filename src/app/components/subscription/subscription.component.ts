import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, interval, takeUntil } from 'rxjs';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
})
export class SubscriptionComponent implements OnInit, OnDestroy {
  private _unsubscribe = new Subject<boolean>();

  //! Iniciamos la suscripción al intervalo en cuanto se abre el componente.
  ngOnInit(): void {
    interval(1500)
      .pipe(takeUntil(this._unsubscribe))
      .subscribe((number) => console.log(number));
  }

  //! Cerramos tanto la suscripción al intervalo, como el Subject intermediario
  ngOnDestroy(): void {
    this._unsubscribe.next(true);
    this._unsubscribe.complete();
  }
}
