import { Component, OnInit } from '@angular/core';
import { CardDetailService } from '../card-detail.service';

@Component({
  selector: 'app-credit',
  templateUrl: './credit.component.html',
  styleUrls: ['./credit.component.css'],
  providers: [CardDetailService]
})
export class CreditComponent implements OnInit {

  constructor(public cardDetailService:CardDetailService) { }
  addCard(cardNumber: number,name: string){
    this.cardDetailService.setCardDetail({cardNumber,name});
}
  ngOnInit(): void {
    this.cardDetailService.carddetail = this.cardDetailService.getCardDetail()
  }

}
