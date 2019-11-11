import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable()
export class LoadingService {
  private serverRequestCounter: number = 0;
  private _loadingState: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() {
  }

  add() {
    this.serverRequestCounter++;
    if (this.serverRequestCounter > 0) {
      this._loadingState.next(true);
    }
  }

  remove() {
    this.serverRequestCounter--;
    if (this.serverRequestCounter < 1) {
      this._loadingState.next(false);
    }
  }

  get Loading() {
    return this._loadingState.asObservable();
  }
}
