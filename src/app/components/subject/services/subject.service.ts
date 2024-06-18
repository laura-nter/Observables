import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SubjectService {
  randomSubject = new Subject<number[]>();
  random$ = this.randomSubject.asObservable();

  constructor() {
    this.getRandomArraySubject();
  }

  getRandomArrayObservable() {
    return new Observable<number[]>((subscriber) => {
      let randomNumbers = [];
      for (let i = 0; i < 10; i++) {
        randomNumbers.push(Math.floor(Math.random() * (50 - 0 + 1) + 50));
      }
      subscriber.next(randomNumbers);
      subscriber.complete();
    });
  }

  getRandomArraySubject() {
    let randomNumbers: number[] = [];
    for (let i = 0; i < 10; i++) {
      randomNumbers.push(Math.floor(Math.random() * (50 - 0 + 1) + 50));
    }

    this.randomSubject.next(randomNumbers);

    setTimeout(() => {
      this.randomSubject.next(randomNumbers);
    }, 300);
  }
}
