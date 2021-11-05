import React,{useState} from 'react'
import './style.css'
import logo from '../../images/logo.png'
import firebase from '../../config/index'
import {exit} from 'process'

const Landing = () =>{

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const register =() =>{
        window.location.href="/register"
    }

     async function login(){
        firebase.auth().signInWithEmailAndPassword(email,password).then((userCredential) =>{
            var user = userCredential.user
            sessionStorage.setItem('email',email)
            window.location.href="/dashboard"
            
        }).catch((error) =>{
            window.alert('usuário ou senha inválidos')
        })
    }
    
    return(

        <div className="container">

            <div className="container_form">
                <img src={logo}/>
                <div className="error">

                </div>
                <h1>Entre usando sua conta ou</h1>
                <div className="clean"/>
                <h2>cadastre-se</h2>

                <div className="forms">
                    <input type="email"  onChange={event => setEmail(event.target.value)}/>
                    <label htmlFor="" id="email">Email</label>
                    <input type="password"  id="password" onChange={event => setPassword(event.target.value)}/>
                    <label htmlFor="">Senha</label>

                    <div className="row1">
                        <div className="checkbox">
                        <input type="checkbox" id="checkbox"/>
                        <label htmlFor="checkbox">Lembrar</label>
                        </div>
                        <p>Esqueceu sua senha?</p>

                    </div>

                <button className="primary" onClick={login}>Entrar</button>
                <button className="secondary" onClick={register}>Cadastrar</button>

                </div>

            </div>

        </div>

    )


}

export default Landing