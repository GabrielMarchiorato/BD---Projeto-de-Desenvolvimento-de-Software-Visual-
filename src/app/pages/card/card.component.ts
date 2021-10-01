import { Component } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { AddCardComponent } from 'src/app/components/add-card/add-card.component';
import { EditCardComponent } from 'src/app/components/edit-card/edit-card.component';
import Card from 'src/app/interfaces/cardInterface';
import UserData from 'src/app/interfaces/userInterface';
import { AccountService } from 'src/app/services/account/account.service';
import { CardService } from 'src/app/services/card/card.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent{
  userData = {} as UserData;
  cards = [] as Card[]
  chartData = {} as any
  loaded = false
  ref?: DynamicDialogRef;
  balance = 0


  constructor(
    private accountService: AccountService,
    private cardService: CardService,
    private dialogService: DialogService
    ) {}

  get chartLabels(): any[] {
    return Object.keys(this.chartData)
  }
  get chartDataset(): any[] {
    return Object.values(this.chartData)
  }

  async ngOnInit(): Promise<void> {
    Promise.resolve()
    .then(() => this.userData = this.accountService.userData)
    
    const response = await this.cardService.getCardsForUser()
    this.cards = response
    this.loaded = true
  }


  async deleteCard(card: Card) {
    await this.cardService.deleteCard(card.id)
    window.location.reload()
  }

  showAddCardModal() {
    this.ref = this.dialogService.open(AddCardComponent, {
        header: 'Adicionar um cartão',
    });
    this.cardService.setRef(this.ref)
  }

  showEditCardModal(card: Card) {
    this.ref = this.dialogService.open(EditCardComponent, {
        header: 'Editar cartão',
        data: card
    });
    this.cardService.setRef(this.ref)
  }
}


