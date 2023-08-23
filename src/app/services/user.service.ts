import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

   //Array con los usuarios del sistema. Al no tener base de datos, los usuarios creados mediante la aplicación serán eliminados al refrescar la página web.
   usuarios=[
    {
      email:'user@example.com',
      password:'1234',
      tareas:[
        "Realizar un informe de las casas en venta de Albacete",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", 
        "Tarea 3"]
    }
  ]

  constructor() { }

  getLoggedUser(){
    let id=localStorage.getItem('usuario');

    for(let usuario of this.usuarios){
      if(usuario.email === id){
        return usuario;
      }
    }
    return null;
  }

  getUsuarios(){
    return this.usuarios;
  }

  agregarUsuario(user:any){
    this.usuarios.push(user);
  }

  getTareasByUser(){
    let usuario=this.getLoggedUser();

    if(usuario !== null)
      return usuario.tareas;
    return [];
  }

  agregarTarea(tarea:string){
    let usuario=this.getLoggedUser();

    if(usuario !== null)
      usuario.tareas.push(tarea);

    //Aquí podríamos poner una función de retorno para saber si la acción ha sido completada con éxito
  }

  eliminarTarea(i:any){
    let usuario=this.getLoggedUser();

    if(usuario !== null)
      usuario.tareas.splice(i,1)
  }
}
