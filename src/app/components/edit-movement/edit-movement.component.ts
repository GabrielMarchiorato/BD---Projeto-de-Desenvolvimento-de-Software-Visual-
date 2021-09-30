import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { AccountService } from 'src/app/services/account/account.service';
import { MovementService } from 'src/app/services/movement/movement.service';

interface Type {
  name: string;
  value: string;
}

@Component({
  selector: 'app-edit-movement',
  templateUrl: './edit-movement.component.html',
  styleUrls: ['./edit-movement.component.scss']
})
export class EditMovementComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private movementService: MovementService,
    private router: Router,
    public config: DynamicDialogConfig
  ) {
    this.form = this.formBuilder.group({
      type: 'others',
      method: 'money_outflow',
      value: '',
      id: '',
      userId: '',
      cardId: ''
    })

    this.types = [
      {name: 'Mercado', value: 'market'},
      {name: 'Farmácia', value: 'drug_store'},
      {name: 'Outros', value: 'others'},
    ];

    this.methods = [
      {name: 'Cartão de Crédito', value: 'credit_card'},
      {name: 'Cartão de Débito', value: 'debit_card'},
      {name: 'Dinheiro Entrada', value: 'money_inflow'},
      {name: 'Dinheiro Saída', value: 'money_outflow'},
      {name: 'Pix Entrada', value: 'pix_inflow'},
      {name: 'Pix Saída', value: 'pix_outflow'},
      {name: 'Depósito Entrada', value: 'deposit_inflow'},
      {name: 'Depósito Saída', value: 'deposit_outflow'},
    ];
  }

  public types: Type[];
  public methods: Type[];

  public form: FormGroup

  ngOnInit(): void {
    this.form.setValue({...this.config.data})
  }

  async onSubmit() {
    await this.movementService.updateMovement(this.form.value)
    window.location.reload()
  }

}
