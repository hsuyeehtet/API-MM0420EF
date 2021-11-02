import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './AppHeader.css';

class AppHeader extends Component {
    render() {
        return (
            <header className="app-header">
                <div className="container">
                    <div className="app-branding">
                        <Link to="/" className="app-title">Know Your Neighborhood</Link>
                    </div>
                    <div className="app-options">
                        <nav className="app-nav">
                                { this.props.authenticated ? (
                                    <ul>
                                        <li>
                                            <NavLink to="/view-stores">STORE</NavLink>
                                        </li>

                                        <li>
                                            <NavLink to="/about">ABOUT US</NavLink>
                                        </li>

                                        <li>
                                            <NavLink to="/contact"> CONTACT US</NavLink>
                                        </li>

                                        <li>
                                            <NavLink to="/profile">PROFILE</NavLink>
                                        </li>

                                        <li>
                                            <a onClick={this.props.onLogout}><button type="button" class="btn btn-primary">LOGOUT</button></a>   
                                        </li>
                                    </ul>
                                ): (
                                    <ul>

                                         <li>
                                            <NavLink to="/term">Terms And Conditions</NavLink>
                                        </li>

                                          <li>
                                            <NavLink to="/about">About Us</NavLink>
                                        </li>

                                        <li>
                                            <NavLink to="/login" ><button type="button" class="btn btn-primary">LOGIN</button></NavLink>        
                                        </li>
                                        <li>
                                            <NavLink to="/signup"><button type="button" class="btn btn-primary">SIGNUP</button></NavLink>        
                                        </li>
                                    </ul>
                                )}
                        </nav>
                    </div>
                </div>
            </header>
        )
    }
}


export default AppHeader;