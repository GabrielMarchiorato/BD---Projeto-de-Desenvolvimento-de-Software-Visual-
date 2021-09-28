import { Component, OnInit } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { LoginComponent } from './shared/login/login.component';
import { AccountService } from './services/account/account.service';
import { DockComponent } from './shared/dock/dock.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DialogService]
})
export class AppComponent implements OnInit {

  constructor(
    private accountService: AccountService,
    private dialogService: DialogService
    ) {}

  ref?: DynamicDialogRef;

  ngOnInit(): void {
    this.checkAuthentication()
  }

  async checkAuthentication() {

    let result = await this.accountService.isAuthenticated()

    // if (!result) {
    //   this.showLoginModal()
    // }
  }


  showLoginModal() {
    this.ref = this.dialogService.open(LoginComponent, {
        header: 'Faça login para continuar',
        dismissableMask: false,
        closable: false,
        closeOnEscape: false
    });
    this.accountService.setRef(this.ref)
}
}
