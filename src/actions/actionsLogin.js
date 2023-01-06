import { useState } from "react";
import index from "layouts/authentication/components/sign-in";

import Flux from "@4geeksacademy/react-flux-dash";


export let autenthicate =(auth)=> {

    Flux.dispatchEvent("auths",dataToSave);
} 

function test(name,password){

    let resultado =[name,pasword];
    alert ("el resultado es"+resultado);

}
iniciarSesion=async()=>{

    await axios.get(baseUrl,{params:{username: this.state.form.username, password: md5 (this.state.form.password)}})
    .then(response=>{
       return response.data;
    }) 
    .then(response=>{
       if(response.length>0){
           var respuesta = response[0];
           cookies.set('id',respuesta.id,{path:"/"});
           cookies.set('nombre',respuesta.nombre,{path:"/"} );
           cookies.set('username',respuesta.username,{path:"/"} );
           alert('Bienvenido ,${respuesta.nombre}' );
       }else{
           alert('el usuario o contrasena es incorrect@'); 
           window.location.href="./dashboard";
       } 
    })
    .catch(error=>{
       console.log(error);
    })
}

