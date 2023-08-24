import { Component, OnInit, Output } from '@angular/core';
import { TodoItes } from '../models/todo';
import { ListTodoService } from '../service/list-todo.service';
import { EventEmitter } from '@angular/core';



@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {


    itemAdicionar= new TodoItes();
    
    list!: TodoItes[];

    item!: string;
   
    @Output() submit: EventEmitter<string> = new EventEmitter();

  
    constructor(private service: ListTodoService ) {
    }

    ngOnInit(): void {
      this.getItens();
    }

    //sauva o item e declara que o valor dele no relacao e = a false 
    addItemList() {
      this.itemAdicionar.item = this.item
      this.itemAdicionar.relacao = false
      this.list.push(this.itemAdicionar)
      this.addItems(this.itemAdicionar) //salvar o novo aquivo que foi adicionado 
    }

    //botao para adicionar o impute, novo intem
    addItems(list:TodoItes): void{
      this.service.add(list).subscribe(rs=>{
        this.list = []
        this.item = ''
        this.getItens()
      });
    }

    getItens(): void{
      this.service.getAll().subscribe(list => {this.list=list});
    } 

    toggleRelacao(item: TodoItes): void {
      // faz com que mude a relacao emtre true e falce
      item.relacao = !item.relacao;
      this.service.updateItem(item).subscribe(
        //você pode adicionar alguma ação após a atualização
        updatedItem => {
          console.log("relacao atualizado:", updatedItem);
        },
        // mostra o erros
        error => {
          console.error("Erro ao atualizar a relacao", error);
        }
      );
    }

    deletar(item: TodoItes): void {
      if (item.id !== undefined){
      this.service.deletarItem(item.id)
      }
    }


}