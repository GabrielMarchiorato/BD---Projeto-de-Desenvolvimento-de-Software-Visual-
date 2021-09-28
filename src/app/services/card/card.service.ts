import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  private baseUrl = "http://localhost:5000/card";

  constructor(private httpClient: HttpClient) { }

  async deleteCard(){
    this.httpClient.delete(this.baseUrl).toPromise<any>();
  }
  async getCardsForUser(){
    this.httpClient.get(this.baseUrl).toPromise<any>();
  }
  async insertCard(data: any){
    this.httpClient.post(this.baseUrl, data).toPromise<any>();
  }
  async updateCard(data: any){
    this.httpClient.patch(this.baseUrl, data).toPromise<any>();
  }
}
