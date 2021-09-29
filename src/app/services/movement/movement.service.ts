import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BalanceService {

  private baseUrl = "http://localhost:5000/movement";
  private options = {}

  constructor(private httpClient: HttpClient) { 
    this.options = { headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    }
  }

  async deleteMovement(id: number){
    this.httpClient.delete(`${this.baseUrl}/${id}`, this.options).toPromise<any>();
  }
  async getMovementsForUser(){
    this.httpClient.get(this.baseUrl, this.options).toPromise<any>();
  }
  async insertMovement(data: any){
    this.httpClient.post(this.baseUrl, data, this.options).toPromise<any>();
  }
  async updateMovement(data: any){
    this.httpClient.patch(this.baseUrl, data, this.options).toPromise<any>();
  }
}
