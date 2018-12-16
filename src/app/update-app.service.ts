import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdateAppService {

  private _listener = new Subject<any>();

  constructor() {
  }

  listen() {
    return this._listener.asObservable();
  }

  emit() {
    this._listener.next();
  }
}
