import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BalanceService {

  private baseUrl = "http://localhost:5000/movement";

  constructor(private httpClient: HttpClient) { }

  async deleteMovement(id: number){
    this.httpClient.delete(`${this.baseUrl}/${id}`).toPromise<any>();
  }
  async getMovementsForUser(){
    this.httpClient.get(this.baseUrl).toPromise<any>();
  }
  async insertMovement(data: any){
    this.httpClient.post(this.baseUrl, data).toPromise<any>();
  }
  async updateMovement(data: any){
    this.httpClient.patch(this.baseUrl, data).toPromise<any>();
  }
}
