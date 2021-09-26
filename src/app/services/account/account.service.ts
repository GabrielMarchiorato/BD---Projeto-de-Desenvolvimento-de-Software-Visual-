import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { Observable } from 'rxjs';
import UserData from 'src/app/interfaces/userInterface';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private baseUrl = "http://localhost:5000/auth"
  public userData = {} as UserData;
  public loginDialogRef?: DynamicDialogRef;

  constructor(private httpClient: HttpClient, private router: Router) { }

  async login(data: any) {
    let response = (await this.httpClient.post(`${this.baseUrl}/login`, data).toPromise<any>())
    this.userData = {...response.user, token: response.token}
    localStorage.setItem('token', response.token)
    this.router.navigate([''])
    this.loginDialogRef?.close()
  }

  async signUp(data: any) {
    let response = (await this.httpClient.post(`${this.baseUrl}/signup`, data).toPromise<any>())
    this.userData = {...response.user, token: response.token}
    localStorage.setItem('token', response.token)
    this.router.navigate([''])
    this.loginDialogRef?.close()
  }

  setRef(ref?: DynamicDialogRef) {
    this.loginDialogRef = ref
  }

  async isAuthenticated() {
    let token = localStorage.getItem('token')
    if (!token) return false
    try {
      await this.httpClient.get(`${this.baseUrl}/authenticated`, { headers: { Authorization: `Bearer ${token}` } }).toPromise()
      return true
    } catch (e) {
      return false
    }
  }
}
