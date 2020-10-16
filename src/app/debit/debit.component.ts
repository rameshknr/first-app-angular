import { Component, OnInit } from '@angular/core';
import { CardDetailService } from '../card-detail.service';

@Component({
  selector: 'app-debit',
  templateUrl: './debit.component.html',
  styleUrls: ['./debit.component.css'],
  providers: [CardDetailService]
})
export class DebitComponent implements OnInit {

  constructor(public cardDetailService:CardDetailService) { }

  addCard(cardNumber: number,name: string){
        this.cardDetailService.setCardDetail({cardNumber,name});
  }
  ngOnInit(): void {
    this.cardDetailService.carddetail = this.cardDetailService.getCardDetail()
  }

}
