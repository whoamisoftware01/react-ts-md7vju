import React,{Component} from 'react'
import Company from '../../components/Company'
import logo from '../../../src/images/logo.png'
import './style.css'
class Header extends Component{

    render(){

        return(
        <div className="row1">
        <div className="icon">
        <img src={logo}/>
        </div>
        <div className="userInfo">
        <h2>{`${sessionStorage.getItem('email')}`}</h2>
        </div>
        </div>
        )
    }
}

export default Header