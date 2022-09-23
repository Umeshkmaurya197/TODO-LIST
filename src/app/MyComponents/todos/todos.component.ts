import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos!: Todo[];

  constructor() {
    let localItem = localStorage.getItem("todos");
    if(localItem==null){
      this.todos=[];
    }else{
      this.todos= JSON.parse(localItem);
    }
                          // this.todos=[
                          //   {
                          //     sno:1,
                          //     title:"this is tile 1",
                          //     desc:"Description 1",
                          //     active:true
                          //   },
                          //   {
                          //     sno:2,
                          //     title:"this is tile 2",
                          //     desc:"Description 2",
                          //     active:true
                          //   },{
                          //   sno:3,
                          //   title:"this is tile 3",
                          //   desc:"Description 3",
                          //   active:true
                          // }]
   }

  ngOnInit(): void {
  }

  deleteTodo(todo:Todo){
    console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos.splice(index,1);
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }

  addTodo(todo:Todo){
    console.log(todo);
    this.todos.push(todo);
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }

  toggleTodo(todo:Todo){
    const index = this.todos.indexOf(todo);
    this.todos[index].active =!this.todos[index].active;
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }
}
