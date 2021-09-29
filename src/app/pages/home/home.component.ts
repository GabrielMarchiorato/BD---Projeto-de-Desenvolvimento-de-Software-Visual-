import { Component, OnInit } from '@angular/core';
import UserData from 'src/app/interfaces/userInterface';
import { AccountService } from 'src/app/services/account/account.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  userData = {} as UserData;

  constructor(
    private accountService: AccountService
    ) {}

  ngOnInit(): void {
    Promise.resolve()
    .then(() => this.userData = this.accountService.userData)
    
  }

}
