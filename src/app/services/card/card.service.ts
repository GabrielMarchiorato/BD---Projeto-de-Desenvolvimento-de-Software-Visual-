import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import Card from 'src/app/interfaces/cardInterface';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  private baseUrl = "http://localhost:5000/card";
  private options = {}
  public dialogRef?: DynamicDialogRef;

  constructor(private httpClient: HttpClient) { 
    this.options = { headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    }
  }  
  
  setRef(ref?: DynamicDialogRef) {
    this.dialogRef = ref
  }

  async deleteCard(id: number){
    this.httpClient.delete(`${this.baseUrl}/?cardId=${id}`, this.options).toPromise<any>();
  }
  async getCardsForUser(){
    return this.httpClient.get<Card[]>(this.baseUrl, this.options).toPromise<Card[]>();
  }
  async insertCard(data: any){
    try {
      const response = await this.httpClient.post(this.baseUrl, data, this.options).toPromise<any>();
      this.dialogRef?.close()
      return response
    } catch {
      this.dialogRef?.close()
    }
  }
  async updateCard(data: any){
    return this.httpClient.patch(this.baseUrl, data, this.options).toPromise<any>();
  }
}
