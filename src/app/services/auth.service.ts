import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //Array con los usuarios del sistema. Al no tener base de datos, los usuarios creados mediante la aplicación serán eliminados al refrescar la página web.
  usuarios=[
      {
        email:'user@example.com',
        password:'1234',
        tareas:[]
      }
    ]

  constructor() { }

  signin(email:string, password:string){
    //Aquí podríamos realizar una llamada al backend donde se realizaría el proceso de autorización y podríamos elaborar un token
    //con el id del usuario de la base de datos, teniendo así una forma de saber que usuario está realizando las operaciones en cada momento. 
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
    this.usuarios.push(newUser);
    localStorage.setItem('usuario', email);
    return 1;
  }

  existeUsuario(email:string){
    for(let usuario of this.usuarios){
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