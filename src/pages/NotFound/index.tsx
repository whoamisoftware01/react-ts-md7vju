import React from 'react'
import errorIcon from '../../images/404.png'
import './style.css'
const NotFound = () =>{

    setTimeout(() =>{
     
        window.location.href="/"

    },5000)

    return(
        <div className="container_error">
            <img src={errorIcon}/>
          <h2>Opss.. não encontramos sua busca :(</h2>
          <h2>Em breve voçê sera redirecionado</h2>
        </div>
    )

}

export default NotFound