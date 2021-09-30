import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';
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
      repeatPassword: new FormControl('', [this.isSigningUpValidator()]),
      role: ''
    })
  }

  loggingIn = true

  public form: FormGroup

  ngOnInit(): void {

  }

  isSigningUpValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      return !this.loggingIn ? {} : null;
    };
  }

  changeButton() {
    this.loggingIn = !this.loggingIn
  }

  onSubmit() {
    if (this.loggingIn) this.accountService.login(this.form.value)
    else this.accountService.signUp(this.form.value)
    .then(() => this.accountService.login(this.form.value))
  }

  signUp(form: FormGroup) {
    form.value.role = "user"
    this.accountService.signUp(form.value);
  }

}
