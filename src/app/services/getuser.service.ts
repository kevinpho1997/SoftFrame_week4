import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { User } from '../class/users';

@Injectable({
  providedIn: 'root'
})
export class GetuserService {
  // private subject = new Subject<any>();

  // private storageSub = new Subject();

  constructor() {

  }

  // observeUser() {
  //   return this.storageSub.asObservable();
  // }

  // setUser(key: string, data: any) {
  //   sessionStorage.setItem(key, data);
  //   this.storageSub.next(data);
  // }

  getCurrentUser() {
    return sessionStorage.getItem("currentUser");
    //     return JSON.parse(sessionStorage.getItem("currentUser"));
  }
  // user(userType: string, objData: any){
  //   this.subject.next({type: userType, data: objData});
  // }

  // getCurrentUser(): Observable<any> {
  //   return this.subject.asObservable();
  // }
}
