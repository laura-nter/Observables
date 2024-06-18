import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BehaviorService {
  wordBehavior = new BehaviorSubject<string>('Fresa');
  behavior$ = this.wordBehavior.asObservable();

  wordSubject = new Subject<string>();
  subject$ = this.wordSubject.asObservable();

  constructor() {
    this.wordSubject.next('Fresa');
  }
}
