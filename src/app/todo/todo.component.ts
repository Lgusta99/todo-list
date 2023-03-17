import { Component, OnInit } from '@angular/core';
import { TodoItes } from '../models/todo';
import { Observable } from 'rxjs';
import { ListTodoService } from '../service/list-todo.service';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {


    list!: TodoItes[];
    
    itesSelecionaddo?: TodoItes;



    constructor(private service: ListTodoService) {
    }

    ngOnInit(): void {
      this.getItens();
    }

    getItens(): void{
      this.service.getAll().subscribe(list => {this.list=list});
    }


    criateItem(): void{

    }



  }





