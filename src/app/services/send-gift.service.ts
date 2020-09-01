import { Injectable } from '@angular/core';
import { Gift } from '../models/gift';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { element } from 'protractor';
import * as _ from 'lodash';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { People } from '../models/people';

import { Facade } from './facade';
import { HttpClient } from '@angular/common/http';
import { SendGift } from '../models/send-gift';

@Injectable({
  providedIn: 'root'
})
export class  SendGiftService extends  Facade<SendGift> {
  resourceName = 'registergift';

  giftList: Array<Gift>;
  senders: Array<any>;
  senderPeople: Array<any>;
  peopleWithReceiver: Array<any>;

  isSenderExist = false;
  showNotif = false;

  constructor(
    protected httpClient: HttpClient
  ) {
     super(httpClient);
     this.senders = [];
     this.giftList = [];
  }


  addGift(gift) {

    console.log(gift);
  }

  getAllGift(): Gift[] {
    return this.giftList;
  }

  // distinctReceiver
  // TOFO check algoritm
  distinctReceiver(filtedBySender, distinctColumns) {
    const seen = Object.create(null);
    return filtedBySender.filter(o => {
      const key = distinctColumns.map(k => o[k]).join('|');
      console.log(key);
      if (!seen[key]) {
        seen[key] = true;
        return true;
      }
    });
  }





  getSenders(): Observable<People[]> {
    const senderData: People[] = new Array();
    this.senders.forEach(e => {
      // console.log("---------------------------");
      //   console.log(e);
      // console.log(e.id, e.senderFirstName, e.senderLastName, ' N/A ', e.senderTel, e.senderId);
      senderData.push(new People(e.id, e.senderFirstName, e.senderLastName, e.senderTel, e.senderId));
    });

    return of(senderData);
  }

  //  getSenderPeople(): Observable<People[]> {
  //   let receiverData: Array<People>;
  //   this.senderPeople.forEach(e =>{
  //     receiverData.push(new People(e.id, e.receiverFirstName, e.receiverLastName, e.receiverCountry, e.receiverTel, e.receiverId));
  //   });
  //     return of(receiverData);
  //   }




  pickSender(senderFirstN: string, senderLastN: string) {
    // convert first name and last  name to lowercase
    const lowerCasefilteredSenders = this.giftList.map((fSender) => {
     // fSender.senderFirstName = fSender.senderFirstName.toLowerCase().trim();
     // fSender.senderLastName = fSender.senderLastName.toLowerCase().trim();
      return fSender;
    });



    this.senders = _.filter(lowerCasefilteredSenders, {
      senderFirstName: senderFirstN.toLowerCase().trim(),
      senderLastName: senderLastN.toLowerCase().trim()
    });




    this.senderPeople = this.distinctReceiver(this.senders, ['receiverFirstName', 'receiverLastName']);

    this.isSenderExist = (this.senders.length > 0);
    this.showNotif = !this.isSenderExist;
    // console.log(this.isSenderExist);
    console.log(this.senders);
    console.log('-------------------------------------');
    console.log(this.senderPeople);
    console.log(this.distinctReceiver(this.senders, ['senderID']));

  }
}
