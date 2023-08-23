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

  constructor(private userService:UserService){}

  ngOnInit(): void {
    this.tareas=this.userService.getTareasByUser();
  }

  eliminarTarea(){
    
  }

}
