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

  //adicionar um item na lista 
  public add(request:TodoItes): Observable<TodoItes>{
    return this.http.post<TodoItes>(this.apiUrl, request);
  }

  //mostrar os items que ja estao no jsom
  public getAll(): Observable<TodoItes[]> {
    return this.http.get<TodoItes[]>(this.apiUrl);
  }

  // subre escreve usando o 'id' pela propriedade
  updateItem(item: TodoItes): Observable<TodoItes> {
    const url = `${this.apiUrl}/${item.id}`; 
    return this.http.put<TodoItes>(url, item);
  }

  //quando e chamado ele deleta o item salvo 
  deletarItem(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }

  //
  public getById() : Observable<TodoItes> {
    return this.http.get<TodoItes>('${this.apiUrl}/#{id}');
  }








}