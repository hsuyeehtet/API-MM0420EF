import React, { Component } from 'react';
import './Home.css';
import shopping from '../img/shopping.png';

class Home extends Component {
    render() {
        return (

            <div className="container-fixed">
                <div className="hero-image">
                     <img className="bg" src={shopping} alt="Online Store"></img>
                        <div className="hero-text">
                            <h1><b>Know Your Neighborhood Application</b></h1>
                            <h3><i>We are serving u stores arround your location.</i> </h3>
                        </div>
                    </div>
                </div>                    

        ) 
    }
}

export default Home;