import { Component, OnDestroy, OnInit } from '@angular/core';
import { SubjectService } from '../../services/subject.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
})
export class FirstComponent implements OnInit, OnDestroy {
  private _unsubscribe = new Subject<boolean>();

  firstRandomArray: number[] = [];

  constructor(private _subjectService: SubjectService) {}

  ngOnInit(): void {
    //! Suscripción directamente al observable del servicio
    // this._subjectService
    //   .getRandomArrayObservable()
    //   .pipe(takeUntil(this._unsubscribe))
    //   .subscribe((randomNumbers) => (this.firstRandomArray = randomNumbers));

    //! Suscripción al subject del servicio
    this._subjectService.random$
      .pipe(takeUntil(this._unsubscribe))
      .subscribe((randomNumbers) => {
        this.firstRandomArray = randomNumbers;
      });
  }

  ngOnDestroy(): void {
    this._unsubscribe.next(true);
    this._unsubscribe.complete();
  }
}
