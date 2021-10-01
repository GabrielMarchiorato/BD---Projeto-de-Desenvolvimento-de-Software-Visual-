import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CardService } from 'src/app/services/card/card.service';

interface Type {
  name: string;
  value: string;
}

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.scss']
})
export class AddCardComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private cardService: CardService,
    private router: Router
  ) {
    this.form = this.formBuilder.group({
      number: null,
      cardHolder: '',
      expirationDate: ''
    })

    this.types = [
      {name: 'Cartão de Crédito', value: 'credit_card'},
      {name: 'Cartão de Débito', value: 'debit_card'},
    ];
  }

  public types: Type[];
  public form: FormGroup

  ngOnInit(): void {

  }

  async onSubmit() {
    await this.cardService.insertCard(this.form.value)
    window.location.reload()
  }


}
