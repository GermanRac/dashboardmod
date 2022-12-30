import { useState } from "react";
import index from "layouts/authentication/components/sign-in";

//import Flux from "@4geeksacademy/react-flux-dash";


const adminUser ={
email:"german@admin.com",
password:"Admin123"
} 


const [user,setUser] = useState({name:"",email:""};
const [error,setError] = useState("");

const logIn = details => {
console.log(details);

}

const logOut = () =>{

    console.log("logOut");
}

return (
<div className="App">


)