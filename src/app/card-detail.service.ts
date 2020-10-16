import { Injectable } from '@angular/core';
import { cardDetail } from './cardDetail';

@Injectable({
  providedIn: 'root'
})
export class CardDetailService {
  public carddetail: Array<cardDetail> = [ ]

  constructor() { }

  setCardDetail(card:cardDetail){
    this.carddetail.push(card)
  }

  getCardDetail(){
    return this.carddetail
  }
}
