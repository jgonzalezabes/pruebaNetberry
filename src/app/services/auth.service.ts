import { Injectable } from '@angular/core';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private userService:UserService) { }

  signin(email:string, password:string){
    //Aquí podríamos realizar una llamada al backend donde se realizaría el proceso de autorización y podríamos elaborar un token
    //con el id del usuario de la base de datos, teniendo así una forma de saber que usuario está realizando las operaciones en cada momento,
    //el cual sería enviado a través de una petición con la ayuda de un interceptor que cambiará la cabecera de esta. 
    //Antes de enviar los datos al servicio deberíamos encriptar la contraseña.

    //Al no tener backend, realizaremos la operación directamente desde este servicio sin elaborar ningún token, únicamente subiremos el email del usuario al localStorage
    let usuario=this.existeUsuario(email);

    if(usuario.password !== null && usuario.password === password){
      localStorage.setItem('usuario', email);
      return 1;
    }
    
    console.log("No se ha encontrado un usuario con esas credenciales");
    return -1;
  }

  signup(email:string, password:string){
    let usuario=this.existeUsuario(email);

    if(usuario.email !== null){
      return -1
    }

    let newUser={
      email,
      password,
      tareas:[]
    }
    this.userService.agregarUsuario(newUser);
    localStorage.setItem('usuario', email);
    return 1;
  }

  existeUsuario(email:string){
    let usuarios = this.userService.getUsuarios();
    for(let usuario of usuarios){
      if(usuario.email === email){
        return usuario;
      }
    }
    return {email:null, password:null};
  }

  loggedIn(){
    if(localStorage.getItem('usuario')){
      return true
    }
    return false
  }

  signOut(){
    localStorage.removeItem('usuario')
  }

}