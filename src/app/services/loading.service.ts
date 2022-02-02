import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  public loading: any =  new BehaviorSubject<any>(false);
  constructor() { }

  isLoading(state: boolean){
    if (!state) {
      setTimeout(()=>{
        this.loading.next(state);
      }, 200)
    } else {
      this.loading.next(state);
    }
  }
}
