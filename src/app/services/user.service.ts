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
        {
          id:1,
          descripcion:"Realizar un informe de las casas en venta de Albacete.",
          tag:"Finalizado"
        },
        {
          id:2,
          descripcion:"Como usuario necesito poder actualizar mis tareas para cambiar el tag de la tarea y corregir cualquier error que haya podido suceder.",
          tag:"En proceso"
        },
        {
          id:3,
          descripcion:"Tarea 3.",
          tag:"Sin comenzar"
        }
      ]
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
    console.log(this.usuarios)
  }

  getTareasByUser(){
    let usuario=this.getLoggedUser();

    if(usuario !== null)
      return usuario.tareas;
    return [];
  }

  agregarTarea(tarea:any){
    let usuario=this.getLoggedUser();

    if(usuario !== null){
      usuario.tareas.push(tarea);
      console.log(usuario.tareas)
    }

    //Aquí podríamos poner una función de retorno para saber si la acción ha sido completada con éxito
  }

  eliminarTarea(i:any){
    let usuario=this.getLoggedUser();

    if(usuario !== null)
      usuario.tareas.splice(i,1)
  }

  actualizarTarea(result:any){
    let usuario=this.getLoggedUser();

    if(usuario !== null){
      for (let i=0;i<usuario.tareas.length;i++){
        if(usuario.tareas[i].id == result.id){
          usuario.tareas[i]=result;
        }
      }
      console.log(usuario.tareas);
    }
  }
}
