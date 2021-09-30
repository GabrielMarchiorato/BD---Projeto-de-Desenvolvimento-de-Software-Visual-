import { Component, OnInit } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { AddMovementComponent } from 'src/app/components/add-movement/add-movement.component';
import { EditMovementComponent } from 'src/app/components/edit-movement/edit-movement.component';
import Movement from 'src/app/interfaces/movementInterface';
import UserData from 'src/app/interfaces/userInterface';
import { AccountService } from 'src/app/services/account/account.service';
import { MovementService } from 'src/app/services/movement/movement.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  userData = {} as UserData;
  movements = [] as Movement[]
  chartData = {} as any
  loaded = false
  ref?: DynamicDialogRef;
  balance = 0


  constructor(
    private accountService: AccountService,
    private movementService: MovementService,
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
    
    const response = await this.movementService.getMovementsForUser()
    this.movements = response

    this.movements.forEach(movement => {
      if (!this.chartData[this.prettierName(movement.type)]) this.chartData[this.prettierName(movement.type)] = 0
      this.chartData[this.prettierName(movement.type)] += movement.value 

    this.balance += movement.value * this.getMultiplier(movement.method)
    })

    console.log(this.balance)
    this.loaded = true
  }

  prettierName(name: string): string {
    return {
      'market': 'Mercado',
      'drug_store': 'Farmácia', 
      'pet': 'Pet', 
      'others': 'Outros'
    }[name] || 'Não definido'
  }

  getMultiplier(method: string) {
    return {
      'credit_card': -1, 
      'debit_card': -1, 
      'money_inflow': 1, 
      'money_outflow': -1,
      'pix_inflow': 1, 
      'pix_outflow': -1, 
      'deposit_inflow': 1, 
      'deposit_outflow': -1,
      'money': -1
    }[method] || 1
  }

  async deleteMovement(movement: Movement) {
    await this.movementService.deleteMovement(movement.id)
    window.location.reload()
  }

  showAddMovementModal() {
    this.ref = this.dialogService.open(AddMovementComponent, {
        header: 'Adicionar uma movimentação',
    });
    this.movementService.setRef(this.ref)
  }

  showEditMovementModal(movement: Movement) {
    this.ref = this.dialogService.open(EditMovementComponent, {
        header: 'Editar movimentação',
        data: movement
    });
    this.movementService.setRef(this.ref)
  }
}
