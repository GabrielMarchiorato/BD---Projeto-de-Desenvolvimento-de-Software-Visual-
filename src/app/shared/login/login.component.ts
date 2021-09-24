import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AccountService } from 'src/app/services/account/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private accountService: AccountService
  ) { 
    this.form = this.formBuilder.group({
      username: '',
      password: ''
    })
  }

  public form: FormGroup

  ngOnInit(): void {
  
  }

  onSubmit() {
    this.accountService.login(this.form.value)
  }

}
