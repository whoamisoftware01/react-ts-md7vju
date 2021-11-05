import React from 'react'
import './style.css'
import logoRazor from '../../images/logo_razor-computadores_oBlfc5.jpg'
import bannerRazor from '../../images/banner.jpg'
import firebase from '../../config/'

function Company(){

    const detailsCompany = () =>{

        window.location.href="/company"
    }
        
        return(

            <div className="card">

            <div className="icon_company">
                <img src={logoRazor}/>
            </div>

            <div className="banner">
            <img src={bannerRazor}/>

            </div>

            <div className="title">
                <h2>Razor Computadores</h2>
            </div>

            <div className="price">
                <h2>R$ 1.797.00,00</h2>
            </div>

            <div className="investors">
                <h2>148 investidores</h2>
            </div>

            <button onClick={detailsCompany}>Invista agora</button>

            </div>

        )

}

export default Company