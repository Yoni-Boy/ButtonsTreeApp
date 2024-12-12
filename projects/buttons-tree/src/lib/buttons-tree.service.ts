import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Node } from '../public-api';

@Injectable({
  providedIn: 'root'
})
export class ButtonsTreeService {

  private buttonClickedSubject = new BehaviorSubject<Node|null>(null);
  public _buttonClicked: Observable<Node|null> = this.buttonClickedSubject.asObservable();


  private barrenButtonClickedSubject = new BehaviorSubject<Node|null>(null);
  public _barrenButtonClicked: Observable<Node|null> = this.buttonClickedSubject.asObservable();


  constructor() {}

  buttonClicked(button: Node|null) {
    this.buttonClickedSubject.next(button);
  }

  barrenButtonClicked(button: Node|null) {
    this.barrenButtonClickedSubject.next(button);
  }
}
