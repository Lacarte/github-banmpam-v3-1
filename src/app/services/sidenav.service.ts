import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {
  constructor() { }
  isOpen = false;
  @Output() tg: EventEmitter<boolean> = new EventEmitter();

  toggle() {
    this.isOpen = !this.isOpen;
    this.tg.emit(this.isOpen);
  }

  show() {
    this.isOpen = true;
    this.tg.emit(this.isOpen);
  }
  hide() {
    this.isOpen = false;
    this.tg.emit(this.isOpen);
  }



}




