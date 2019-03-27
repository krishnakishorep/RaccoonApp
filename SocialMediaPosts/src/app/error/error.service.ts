import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class ErrorService{
  private errorListener = new Subject<string>();

  getErrorListener(){
    return this.errorListener.asObservable();
  }

  throwError(message: string){
    return this.errorListener.next(message);
  }

  handleError(){
   return this.errorListener.next(null);
  }

}
