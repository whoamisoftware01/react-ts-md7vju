import React from 'react'
import Sidebar from '../../components/Sidebar/'
import './style.css'
import Header from '../../components/Header'
import Company from '../../components/Company'
import firebase from '../../config/'
import {exit} from 'process'
import realIcon from '../../images/real.png'
import downloadIcon from '../../images/download-direto.png'

const Investment = () =>{

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
        <Sidebar/>
        <div className="container_company">

        <div className="row_investment">

        <div className="info_investment_company">

        <h2>Nome Completo: Gustavo Henrique </h2>
        <h2>Email: contatotest@gmail.com</h2>
        <h2>Telefone: (11) 93280-3021</h2>
        <h2>Data nascimento: 22/08/2001</h2>
        <h2>CPF:311.220.878-11</h2>
        <h2>RG:551032686</h2>

        <h2>Documentos</h2>

        <div className="document_invest_info">

          <label>Anexo b <img src={downloadIcon}/></label>
          <label>Contrato investimento <img src={downloadIcon}/></label>

        </div>

        </div>

        <div className="value_investment">

        <h2>Valor do investimento</h2>

        <div className="input_value">
        <div className="img_real">
        <img src={realIcon} alt="" />
        </div>
        <input type="text"/>
        </div>

        <h2>Valor da ação: R$:5000</h2>
        <h2>Numero de ações: 0,00</h2>
        <h2 className="investment_h2">Investimento: 0</h2>

        <h2 className="investment_h2">Total: 0</h2>

        <button>Investir</button>

        </div>

        </div>


        {/* code in firebase for listen cards companys */}
        </div>
        </div>
        </div>
    )

}

export default Investment