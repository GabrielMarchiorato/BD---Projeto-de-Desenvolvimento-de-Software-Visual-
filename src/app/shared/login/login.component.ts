import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AccountService } from 'src/app/services/account/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private accountService: AccountService,
    private router: Router
  ) {
    this.form = this.formBuilder.group({
      username: '',
      password: '',
      role: ''
    })
  }

  public form: FormGroup

  ngOnInit(): void {

  }

  onSubmit() {
    this.accountService.login(this.form.value)
  }

  signUp(form: FormGroup) {
    form.value.role = "user"
    // console.log(form.value)
    this.accountService.signUp(form.value);
  }

}
