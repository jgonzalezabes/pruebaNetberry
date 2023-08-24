import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalTareaComponent } from 'src/app/shared/modal-tarea/modal-tarea.component';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit{
  id=localStorage.getItem('usuario');
  tareas:any[]=[];
  nuevaTarea={
    id:0,
    descripcion:"",
    tag:""
  }
  tagsList: string[] = ['Sin comenzar', 'En proceso', 'Finalizado'];

  constructor(private userService:UserService, public dialog: MatDialog){}

  ngOnInit(): void {
    this.getTareas();
  }

  getTareas(){
    this.tareas=this.userService.getTareasByUser();
  }

  agregarTarea(){
    if(this.nuevaTarea.descripcion === "" || this.nuevaTarea.tag === ""){
      window.alert("Debe rellenar todos los campos");
      return ;
    }
    if(this.tareas.length !== 0){
      this.nuevaTarea.id = this.tareas[this.tareas.length - 1].id + 1;
    }else{
      this.nuevaTarea.id=1;
    }
    this.userService.agregarTarea(this.nuevaTarea);
    //reiniciamos el valor de la variable
    this.nuevaTarea={
      id:0,
      descripcion:"",
      tag:""
    }
    this.getTareas(); //volvemos a llamar al método getTareas para actualizar la lista de tareas
  }

  eliminarTarea(i:any){
    this.userService.eliminarTarea(i);
    this.getTareas();
  }

  openDialog(tarea:any): void {
    const dialogRef = this.dialog.open(ModalTareaComponent, {
      data: {tarea:tarea},
      height: '250px',
      width: '600px',
    });

    dialogRef.afterClosed().subscribe(result => {
      this.userService.actualizarTarea(result);
      this.getTareas();
    });
  }

}
