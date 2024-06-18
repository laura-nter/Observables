import { Component, OnInit } from '@angular/core';
import { BehaviorService } from './services/behavior.service';

@Component({
  selector: 'app-behavior',
  templateUrl: './behavior.component.html',
})
export class BehaviorComponent implements OnInit {
  constructor(private _behaviorService: BehaviorService) {}

  ngOnInit(): void {
    //! Actualización del valor emitido por el BehaviorSubject tras 3 segundos
    setTimeout(() => {
      this._behaviorService.wordBehavior.next('Limón');
    }, 3000);

    //! Actualización del valor emitido por el Subject tras 3 segundos
    setTimeout(() => {
      this._behaviorService.wordSubject.next('Limón');
    }, 3000);
  }
}
