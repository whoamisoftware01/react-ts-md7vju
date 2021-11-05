import React,{Component} from 'react'
import './style.css'
class Sidebar extends Component{


    render(){

        return(

            <div className="sidebar">

            <nav>
                <ul>
                    <li className="checked">Invista em startups</li>
                    <li><a href="/receive">Receba investimento</a></li>
                    <div className="clean"></div>
                    <li><a href="/profile">Meu perfil</a></li>
                </ul>
            </nav>

            </div>

        )

    }    
}

export default Sidebar