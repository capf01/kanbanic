import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  CdkDragDrop,
  DragDropModule,
  moveItemInArray,
  transferArrayItem
} from '@angular/cdk/drag-drop';
import { Tarefa } from '../models/tarefas';

@Component({
  selector: 'app-kanban',
  imports: [
    CommonModule,
    FormsModule,
    DragDropModule
  ],
  templateUrl: './kanban.html',
  styleUrl: './kanban.css',
})
export class Kanban {

  novaTarefa = '';
  todo: Tarefa[] = [];
  doing: Tarefa[]=[];
  done: Tarefa[] = [] ; 

  adicionarTarefa(){
    if(!this.novaTarefa.trim())return;
    this.todo.push({
      id: Date.now(),
      titulo:this.novaTarefa,
      descricao:'',
      status:'todo'
    });
    this.novaTarefa='';
  }
  drop(event:CdkDragDrop<Tarefa []>){
    if(event.previousContainer == event.container){
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );

    }
    else{
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}

