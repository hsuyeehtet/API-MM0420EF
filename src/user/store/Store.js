import React, { Component } from 'react'
import { viewStore } from '../../service/OnlineService';
import './Search.css';

export class Store extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             stores: [],
             key: ''
        }
    }

    componentDidMount(){
        viewStore()
        .then((response)=>{
            this.setState({
                stores: response
            });
            console.log("List of stores" + JSON.stringify(response))
        }
        );
    }

    searchChangeHandler = (event) =>{
        this.setState({
            key: event.target.value
       })
    }

    searchByKey= (key) =>{
        this.props.history.push(`/store/search/${key}`)
    }

    render() {
        return (
            <div>
            <h2>WELCOME TO ONLINE STORE PORTAL!</h2>
                <h2>VIEW STORES</h2>

                {/* Customized Search Button */}
                <form className="example" action="">
                    <input type="text" placeholder="Search.." name="search"
                    value={this.state.key} onChange={this.searchChangeHandler}/>
                    <input type="button" onClick = { () => this.searchByKey(this.state.key) }
                    value="SEARCH">
                    </input>
                </form>
                <br></br>


                <table className="table">
                <thead>
                    <tr className="table-dark">
                    <th scope="col">Store Name</th>
                    <th scope="col">Store Description</th>
                    <th scope="col">Store Rating</th>
                    <th scope="col">Store RegistrationDate</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        this.state.stores.map(store =>
                        <tr className="table-active" key={store.storeId}>
                            <td>{store.storeName}</td>
                            <td>{store.storeDesc}</td>
                            <td>{store.storeRating}</td>
                            <td>{store.storeRegDate}</td>
                         </tr>
                        )
                    }
                </tbody>
                </table>
            </div>
        )
    }
}


export default Store
