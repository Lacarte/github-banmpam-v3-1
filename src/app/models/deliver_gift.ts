export class DeliverGift {
  constructor(
    public id: string,
    public transaction: string,
    public origin: string,
    public reference: string,
    public destination: string,
    public total: string,
    public status: string,
    public senderFullname: string,
    public receiverFn: string,
    public receiverLn: string,
    public description: string,
    public value: string,
  ) {
  }
}
