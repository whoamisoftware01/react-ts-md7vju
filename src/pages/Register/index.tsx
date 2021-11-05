import React,{useState} from 'react'
import firebase from '../../config/'
import './style.css'
import logo from '../../images/logo.png'
import {exit} from 'process'

const Register = () =>{

    const [password,setPassword] = useState("")
    const [email,setEmail] = useState("")
    const [validate,setValidade] = useState("")

    async function register() {
        firebase.auth().createUserWithEmailAndPassword(email,password).then(() =>{
            window.location.href="/dashboard"
            sessionStorage.setItem('email',email)

        }).catch((error) =>{
            console.log(error)
            window.alert('opss, não foi possivel realizar seu cadastro.')
        })
    }
    
    const back = () =>{
        window.location.href="/"
    }

    return(

        <div className="container">

            <div className="container_form">
            <img src={logo}/>

                <h1>Informe seus dados para cadastrar.</h1>

                <div className="forms">
                        
                    <input type="email" className="name"/>
                    <label htmlFor="">Nome Completo</label>

                    <input type="email" id="email" onChange={event => setEmail(event.target.value)} />
                    <label htmlFor="">E-mail</label>

                    <input type="password" id="password" onChange={event => setPassword(event.target.value)}/>
                    <label htmlFor="">Senha</label>

                    <input type="password" id="password" onChange={event => setValidade(event.target.value)} />
                    <label htmlFor="">Confirmação de senha</label>

                <button className="primary" onClick={register}>Cadastrar</button>
                <button className="secondary" onClick={back}>Voltar</button>

                </div>

            </div>

        </div>

        
    )
}

export default Register