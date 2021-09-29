import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import UserData from "src/app/interfaces/userInterface"
import { AccountService } from 'src/app/services/account/account.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  usuario: UserData;

  constructor(
    private router: Router
  ) { this.usuario = {} as UserData; }

  ngOnInit(): void {
  }

  update(user: UserData): void {
  }

}