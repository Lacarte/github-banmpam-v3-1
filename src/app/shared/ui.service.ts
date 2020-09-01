import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable()
export class UIService {

//is less than medium screen 
  private _isLtMd = new BehaviorSubject<boolean>(false);
  private _isLtMd$ = this._isLtMd.asObservable();

//sidenav 
  private _isOpen = new BehaviorSubject<boolean>(false);
  private _isOpen$ = this._isOpen.asObservable();

//sidenavtext 
  private _sidenavText = new BehaviorSubject<boolean>(false);
  private _sidenavText$ = this._sidenavText.asObservable();


  constructor() { }

  set isLtMd(new_isLtMd: boolean) {
    if(new_isLtMd){
      console.log("lt md");
    }else{
         console.log("big");
   
    }
    this._isLtMd.next(new_isLtMd);
  }

  getIsLtMd(): Observable<boolean> {
    return this._isLtMd$;
  }

  //to get the last value of the behavior subject
  getIsLtM(): boolean {
    return this._isOpen.getValue();
  }

  set isOpen(new_isOpen: boolean) {
    console.log('nav state',new_isOpen);
    this._isOpen.next(new_isOpen);
  }

  getIsOpen(): Observable<boolean> {
    return this._isOpen$;
  }

//to get the last value of the behavior subject
  getValueIsOpen(): boolean {
    return this._isOpen.getValue();
  }

  toggleNav() {
    this._isOpen.next(!this._isOpen.getValue());
  }


 set sidenavText(new_sidenavText: boolean) {
    this._sidenavText.next(new_sidenavText);
  }

  getSidenavText(): Observable<boolean> {
    return this._sidenavText$;
  }

  //to get the last value of the behavior subject
  getValueSidenavText(): boolean {
    return this._sidenavText.getValue();
  }





}