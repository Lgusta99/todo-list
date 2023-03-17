import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TodoItes } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class ListTodoService {

  private apiUrl =  'http://localhost:3000/itens';

  constructor(private http: HttpClient) { }

  public getAll(): Observable<TodoItes[]> {
    return this.http.get<TodoItes[]>(this.apiUrl);
  }

  public getById(id: number) : Observable<TodoItes> {
    return this.http.get<TodoItes>('${this.apiUrl}/#{id}');
  }








}