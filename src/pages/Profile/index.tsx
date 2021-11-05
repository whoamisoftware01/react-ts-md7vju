import React from 'react'
import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'
import firebase from '../../config/'
import {exit} from 'process' 
import './style.css'
import userProfileIcon from '../../images/profile.png'
const Profile = () =>{

       firebase.auth().onAuthStateChanged((user) => {
        if (user) {    
          let uid = user.uid;
        } else {
            window.location.href="/"
            exit()
        }
      });

    return(

        <div className="container_dashboard">
        <Header/>        
        <div className="row2">
        <div className="sidebar">
            <nav>
                <ul>
                    <li><a href="/dashboard">Invista em startups</a></li>
                    <div className="clean"></div>
                    <li><a href="/receive">Receba investimento</a></li>
                    <li className="checked">Meu perfil</li>
                </ul>
            </nav>

            </div>

            <div className="container_profile">
            
            <div className="card_profile">
            <div className="pictureProfile">
            <div className="description">
            <h2>Foto de perfil</h2>
            </div>
            <div className="flex1">
            <img src={userProfileIcon}/>
            <input type="file"/>
            </div>
            </div>
            </div>

            <div className="card_profile">
            <div className="pictureProfile">
            <div className="description">
            <h2>Dados pessoais</h2>
            </div>
            <div className="input_row1">
            <input type="text"/>
            <label htmlFor="">Nome Completo </label>
            </div>

            <div className="input_row2">

            <div className="input_line2">
            <div>
            <input type="text"/>
            <label htmlFor="">CPF </label>
            </div>
            <div>
            <input type="text"/>
            <label htmlFor="">RG </label>
            </div>
            <div>
            <input type="text"/>
            <label htmlFor="">Data de nascimento </label>
            </div>
            </div>

            <div className="input_line3">
            <div>
            <input type="text"/>
            <label htmlFor="">Endereço </label>
            </div>
            <div>
            <input type="text"/>
            <label htmlFor="">CEP </label>
            </div>
            </div>

            <div className="input_line3">
            <div>
            <input type="text"/>
            <label htmlFor="">Cidade </label>
            </div>
            <div>
            <input type="text"/>
            <label htmlFor="">Estado</label>
            </div>
            </div>

            <div className="input_row1">
            <input type="text"/>
            <label htmlFor="">Telefone </label>
            </div>

            </div>
            </div>
            </div>

            <div className="card_profile">
            <div className="pictureProfile">
            <div className="description">
            <h2>Dados Bancários</h2>
            </div>

            <div className="clean"></div>
            <div className="input_line3">
            <div>
            <input type="text"/>
            <label htmlFor="">Banco </label>
            </div>

            <div className="select">
            <select>
                <option value="">Conta Corrente</option>
                <option value="">Conta Poupança</option>
            </select>
            <label htmlFor="">Tipo de conta </label>
            </div>
            </div>

            
            <div className="input_line2">
            <div>
            <input type="text"/>
            <label htmlFor="">Agência</label>
            </div>
            <div>
            <input type="text"/>
            <label htmlFor="">Conta</label>
            </div>
            <div className="select">
            <select>
                <option value="">Sim</option>
                <option value="">Não</option>
            </select>
            <label htmlFor="">Conta Conjunta </label>
            </div>
            </div>

            <div className="input_line3">
            <div>
            <input type="text"/>
            <label htmlFor="">Código pix </label>
            </div>
            <div className="select">
            <select>
                <option value="">Chave</option>
                <option value="">Telefone</option>
                <option value="">Cpf</option>
            </select>
            <label htmlFor="">Tipo de pix </label>
            </div>
            </div>
            <button>Salvar</button>
            </div>
            </div>

            {/* code in firebase for listen cards companys */}
            </div>

            </div>
        </div>


            

    )
}

export default Profile