import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Movement from 'src/app/interfaces/movementInterface';
import { DynamicDialogRef } from 'primeng/dynamicdialog';

@Injectable({
  providedIn: 'root'
})
export class MovementService {

  private baseUrl = "http://localhost:5000/movement";
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

  async deleteMovement(id: number){
    return this.httpClient.delete(`${this.baseUrl}/${id}`, this.options).toPromise<any>();
  }
  async getMovementsForUser(){
    return this.httpClient.get<Movement[]>(this.baseUrl, this.options).toPromise<Movement[]>();
  }
  async insertMovement(data: any){
    try {
      const response = await this.httpClient.post(this.baseUrl, data, this.options).toPromise<any>();
      this.dialogRef?.close()
      return response
    } catch {
      this.dialogRef?.close()
    }


  }
  async updateMovement(data: any){
    return this.httpClient.patch(this.baseUrl, data, this.options).toPromise<any>();
  }
}
