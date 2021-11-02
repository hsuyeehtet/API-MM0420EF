import React, { Component } from 'react'
import './contact.css';

export class Contact extends Component {
    render() {
        return (
            <div class="section">
            <div class="top-border left"></div>
            <div class="top-border right"></div>
            <h1>CONTACT US</h1>
            <p>General Service®<br/>
            (+95) 785233653/ (+95) 405436233<br/>
            24 hours a day, 7 days a week
            <br/><br/> <hr/>
            Wells Fargo Online®<br/>
            (+95) 9456812345<br/>
            24 hours a day, 7 days a week
            <br/><br/><hr/>
            Make an Appointment®<br/>
            Schedule an appointment to meet 1:1 with a banker. Make an appointment online in just a few minutes.
            <br/><br/><hr/>
            Contact Us Internationally®<br/>
            Customers outside of the United States can call Wells Fargo customer service toll-free from most countries using our international access codes.</p>
                <a href="/">START WITH US</a>
            </div>
        )
    }
}

export default Contact
