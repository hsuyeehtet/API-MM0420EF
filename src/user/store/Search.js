import React, { Component } from 'react'
import { searchByKey } from '../../service/OnlineService';
import './Search.css';

export class Search extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             key: this.props.match.params.key,
             stores:[]
            }
    }
    
    componentDidMount(){
        searchByKey(this.state.key)
        .then((response)=>{
            this.setState({
                stores: response
            });
            console.log("Search Result" + JSON.stringify(response))
        }
        )
    }


    render() {
        return (
            <div className="form">

                <h2>SEARCH STORE RESULTS</h2>
    
                <br></br>

                {/* Boostrap Table */}
                <table className="table">
                <thead>
                    <tr className="table-dark">
                    <th>Store Name</th>
                    <th>Store Description</th>
                    <th>Store Rating</th>
                    <th>Store RegistrationDate</th>
                    </tr>
                </thead>
                <tbody>
                    {
                       this.state.stores.map(store =>
                        <tr className="table-light" key={store.storeId}>
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

export default Search
