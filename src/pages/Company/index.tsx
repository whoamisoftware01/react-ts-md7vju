import React from 'react'
import Sidebar from '../../components/Sidebar/'
import './style.css'
import Header from '../../components/Header'
import firebase from '../../config/'
import razzorBanner from '../../images/razorbanner.jpg'
import downloadIcon from '../../images/download-direto.png'
import logoRazzer from '../../images/logo_razor-computadores_oBlfc5.jpg'
import {exit} from 'process'

const Company = () =>{

    firebase.auth().onAuthStateChanged((user) => {
        if (user) {    
          let uid = user.uid;
        } else {
            window.location.href="/"
            exit()
        }
      });

    const investment = () =>{

        window.location.href="/investment"
    }

    return(

        <div className="container_dashboard">
        <Header/> 
        <div className="row2">
        <Sidebar/>
        <div></div>
        <div className="container_company">

        <div className="column_company">
        <div className="banner_company">
        <img src={razzorBanner}/>
        </div>
        <div className="row_company">
        <button onClick={investment}>Investir</button>
        </div>
        <div className="line">
        </div>
        </div>
        
        <div className="description_column">

        <div className="desc_company_column">
        <div className="logo_company">
        <img src={logoRazzer}/>
        </div>
        <h1>Razzor Computadores</h1>
        <p>A melhor marca de computadores.</p>
        <h2 className="subTitle">Nosso investimento na Razzor Computadores </h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda quisquam sunt numquam, odit rerum eum neque magnam eos! Itaque, fugit! Minima, eveniet amet quod alias a quibusdam rerum quas excepturi!</p>

        <div className="company_info">
        <h2>Sobre a empresa.</h2>
        <p>fundada em 1999</p>
        <p>funcionarios: 500</p>
        <p className="website"><a href="https://razorcomputadores.com.br/">website: razor.com</a></p>
        </div>

        <h2>Pitch Deck</h2>

        <iframe src="https://firebasestorage.googleapis.com/v0/b/projectinvisto.appspot.com/o/empresas%2Fpitchs%2FPreekly%20Goal%20Updates%20(1).pdf?alt=media&token=ad4fa087-19d7-46a1-89ac-c5cbcb34acab"  />
        </div>

    
        <div className="terms_ofert">
        <h2>Termos de oferta</h2>

        <div className="column_terms">

            <div>
            <p>Investimento mínimo</p>
            <h2>R$ 2.500,00</h2>
            </div>

            <div>
            <p>Captando</p>
            <h2>R$ 2.500,00</h2>
            </div>

            <div>
            <p>Valor da ação</p>
            <h2>R$ 500,00</h2>
            </div>
            
            <div>
            <p>Valuation</p>
            <h2>R$ 15.345.00,00</h2>
            </div>
        </div>

        <div className="terms_ofert">
        <h2>Documentos</h2>

        <div className="column_terms">

            <div className="cvmInfo">
            <p>informações essenciais cvm da oferta pública  </p>

            <div className="cvmrow">
            <img src={downloadIcon}/>
            <p>Anexo B</p>
            </div>
            </div>

            <div className="cvmInfo">
            <p>Documentos da organização</p>

            <div className="cvmrow">
            <img src={downloadIcon}/>
            <p>Contrato de investimento</p>
            </div>

            <div className="cvmrow">
            <img src={downloadIcon}/>
            <p>DRE</p>
            </div>
            

             <div className="cvmrow">
            <img src={downloadIcon}/>
            <p>Projeção Financeira</p>
            </div>
            

            <div className="cvmrow">
            <img src={downloadIcon}/>
            <p>Balanço Patrimonial</p>
            </div>


             <div className="cvmrow">
            <img src={downloadIcon}/>
            <p>Cap Table</p>
            </div>


             <div className="cvmrow">
            <img src={downloadIcon}/>
            <p>Contrato de investimento</p>
            </div>


             <div className="cvmrow">
            <img src={downloadIcon}/>
            <p>Apresentação para investidores (Deck)</p>
            </div>
                        
            <div className="cvmrow">
            <img src={downloadIcon}/>
            <p>Contrato Social</p>
            </div>

            </div>
        
        </div>


        </div>


        </div>





        </div>


        {/* code in firebase for listen cards companys */}
        </div>

        </div>
        </div>
    )

}

export default Company