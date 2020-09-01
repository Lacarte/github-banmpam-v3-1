import { IGiftData } from './Igift-data';

export class SendGift {
  public constructor(init?: Partial<IGiftData>) {
    Object.assign(this, init);
}

  // constructor(
  //   public senderId: number,
  //   public senderFirstName: string,
  //   public senderLastName: string,
  //   public senderPhone: string,
  //   public senderIdDocType: number,
  //   public senderidDoc: string,
  //   public receiverId: number,
  //   public receiverFirstName: string,
  //   public receiverLastName: string,
  //   public receiverIdCountry: number ,
  //   public receiverPhone: string,
  //   public idValue: number,
  //   public description: string,
  //   ) {
  // }


}
