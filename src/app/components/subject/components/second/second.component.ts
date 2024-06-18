import { Component, OnDestroy, OnInit } from '@angular/core';
import { SubjectService } from '../../services/subject.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
})
export class SecondComponent implements OnInit, OnDestroy {
  private _unsubscribe = new Subject<boolean>();

  secondRandomArray: number[] = [];

  constructor(private _subjectService: SubjectService) {}

  ngOnInit(): void {
    //! Suscripción directamente al observable del servicio
    // this._subjectService
    //   .getRandomArrayObservable()
    //   .pipe(takeUntil(this._unsubscribe))
    //   .subscribe((randomNumbers) => (this.secondRandomArray = randomNumbers));

    //! Suscripción al subject del servicio
    this._subjectService.random$
      .pipe(takeUntil(this._unsubscribe))
      .subscribe((randomNumbers) => {
        this.secondRandomArray = randomNumbers;
      });
  }

  ngOnDestroy(): void {
    this._unsubscribe.next(true);
    this._unsubscribe.complete();
  }
}
