import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit{
  id=localStorage.getItem('usuario');
  tareas:any;
  nuevaTarea:string="";
  tareaActualizada:string="";

  constructor(private userService:UserService){}

  ngOnInit(): void {
    this.getTareas();
  }

  getTareas(){
    this.tareas=this.userService.getTareasByUser();
  }

  agregarTarea(){
    if(this.nuevaTarea === ""){
      return ;
    }
    this.userService.agregarTarea(this.nuevaTarea);
    this.nuevaTarea=""; //reiniciamos el valor de la variable
    this.getTareas(); //volvemos a llamar al método getTareas para actualizar la lista de tareas
  }

  eliminarTarea(i:any){
    this.userService.eliminarTarea(i);
    this.getTareas();
  }

  actualizarTarea(){
  }

}
