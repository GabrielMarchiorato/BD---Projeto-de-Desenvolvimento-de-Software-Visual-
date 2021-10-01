import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { AccountService } from 'src/app/services/account/account.service';
import { CardService } from 'src/app/services/card/card.service';
import { MovementService } from 'src/app/services/movement/movement.service';

interface Type {
  name: string;
  value: string;
}

@Component({
  selector: 'app-edit-card',
  templateUrl: './edit-card.component.html',
  styleUrls: ['./edit-card.component.scss']
})
export class EditCardComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private cardService: CardService,
    private router: Router,
    public config: DynamicDialogConfig
  ) {
    this.form = this.formBuilder.group({
      number: null,
      cardHolder: '',
      expirationDate: '',
      id: '',
      userId: '',
      movements: []
    })

    this.types = [
      {name: 'Cartão de Crédito', value: 'credit_card'},
      {name: 'Cartão de Débito', value: 'debit_card'},
    ];
  }

  public types: Type[];

  public form: FormGroup

  ngOnInit(): void {
    this.form.setValue({...this.config.data})
  }

  async onSubmit() {
    await this.cardService.updateCard(this.form.value)
    window.location.reload()
  }

}
