import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorService } from '../../services/behavior.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css'],
})
export class ThirdComponent implements OnInit {
  private _unsubscribe = new Subject<boolean>();

  behavior!: string;
  subject!: string;

  constructor(private _behaviorService: BehaviorService) {}

  ngOnInit(): void {
    //! Suscripción al BehaviorSubject del servicio
    this._behaviorService.behavior$.subscribe((word) => (this.behavior = word));

    //! Suscripción al Subject del servicio
    this._behaviorService.subject$.subscribe((word) => (this.subject = word));
  }
}
