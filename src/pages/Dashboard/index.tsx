import React from 'react'
import Sidebar from '../../components/Sidebar/'
import './style.css'
import Header from '../../components/Header'
import Company from '../../components/Company'
import firebase from '../../config/'
import {exit} from 'process'

const Dashboard = () =>{

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

        <Company/>
        <Company/>
        <Company/>
 

        {/* code in firebase for listen cards companys */}
        </div>
        </div>
        </div>
    )

}

export default Dashboard