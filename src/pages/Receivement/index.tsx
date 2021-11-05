import React from 'react'
import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'
import firebase from '../../config/'
import {exit} from 'process' 
import './style.css'
import userProfileIcon from '../../images/profile.png'
import downloadIcon from '../../images/download-direto.png'
const Receivement = () =>{

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
                    <li className="checked"><a href="/receive">Receba investimento</a></li>
                    <li><a href="/profile">Meu perfil</a></li>
                </ul>
            </nav>

            </div>

            <div className="container_profile">

            <div className="card_profile">
            <div className="pictureProfile">
            <div className="description">
            <h2>Dados da empresa</h2>
            </div>
            <div className="input_row1">
            <input type="text"/>
            <label htmlFor="">Nome Completo </label>
            </div>

            <div className="input_row2">

            <div className="input_line2">
            <div>
            <input type="text"/>
            <label htmlFor="">Nome Fantasia </label>
            </div>
            <div>
            <input type="text"/>
            <label htmlFor="">Razão Social </label>
            </div>
            <div>
            <input type="text"/>
            <label htmlFor="">CNPJ</label>
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

            </div>
            
            </div>
            </div>

            <div className="card_profile">
            <div className="pictureProfile">
            <div className="description">
            <h2>Termos de oferta</h2>
            </div>

            <div className="clean"></div>
  
            <div className="input_line2">
            <div>
            <input type="text"/>
            <label htmlFor="">Investimento mínimo</label>
            </div>
            <div>
            <input type="text"/>
            <label htmlFor="">Quanto você quer captar?</label>
            </div>
            </div>

            <div className="input_line3">
            <div>
            <input type="text"/>
            <label htmlFor="">Equity oferecido </label>
            </div>
            <div>
            <input type="text"/>
            <label htmlFor="">Valor da ação UN </label>
            </div>
            </div>
            
            
            <div className="input_line3">
            <div>
            <input type="text"/>
            <label htmlFor="">Valuation </label>
            </div>
            </div>
            </div>
            </div>


            <div className="card_profile">
            <div className="pictureProfile">
            <div className="description">
            <h2>Pitch e documentos da empresa</h2>
            </div>

            <div className="clean"></div>

            <div className="documents">

            <div>
                <input type="file" id="logo"/>
                <label htmlFor="logo">Logo da empresa<img src={downloadIcon}/></label>
            </div>
         
            <div>
                <input type="file" id="banner"/>
                <label htmlFor="logo">Banner da empresa<img src={downloadIcon}/></label>
            </div>
         
            <div>
                <input type="file" id="banner"/>
                <label htmlFor="logo">Pitch deck completo (PDF)<img src={downloadIcon}/></label>
            </div>

            <div>
                <input type="file" id="banner"/>
                <label htmlFor="logo">Contrato de investimento<img src={downloadIcon}/></label>
            </div>

            <div>
                <input type="file" id="banner"/>
                <label htmlFor="logo">DRE<img src={downloadIcon}/></label>
            </div>

              <div>
                <input type="file" id="banner"/>
                <label htmlFor="logo">Projeção financeira<img src={downloadIcon}/></label>
            </div>

            <div>
                <input type="file" id="banner"/>
                <label htmlFor="logo">Balanço patrimonial<img src={downloadIcon}/></label>
            </div>

            <div>
                <input type="file" id="banner"/>
                <label htmlFor="logo">Cap Table<img src={downloadIcon}/></label>
            </div>

            <div>
                <input type="file" id="banner"/>
                <label htmlFor="logo">Contrato Social<img src={downloadIcon}/></label>
            </div>
            </div>
            <button>Enviar para analise</button>
        
            </div>
            
            </div>


            {/* code in firebase for listen cards companys */}
            </div>

            </div>
        </div>


            

    )
}

export default Receivement