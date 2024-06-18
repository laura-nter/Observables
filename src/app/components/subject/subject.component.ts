import { Component, OnInit } from '@angular/core';
import { SubjectService } from './services/subject.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css'],
})
export class SubjectComponent implements OnInit {
  randomArray$!: Observable<number[]>;

  constructor(private _subjectService: SubjectService) {}

  ngOnInit(): void {
    this._subjectService.getRandomArraySubject();
  }
}
