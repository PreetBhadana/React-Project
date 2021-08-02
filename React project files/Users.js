import React, { Component, useMemo } from 'react';
import './Table.css'
import { Link } from 'react-router-dom'

class Users extends Component{
    constructor()
    {
        super();
        this.state={
            error: null,
            isLoaded: false,
            items: [],
            columns: ["Id", "Name", "User Name", "email","Phone", "Web Site"]
        };

    }


    componentDidMount()
    {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({isLoaded: true, items: result})},
            (error) => {this.setState({isLoaded: true, error})}
        )
    
    }

    render(){
        const {error, isLoaded, items} = this.state;
        console.log(items.map(item => item.id))
        
        if (error)
        {
            return <div>Error: {error.message}</div>;
        } 
        else if (!isLoaded) 
        {
            return <div>Loading...</div>;
        } 
        else 
        {
            return(
                <div>
                    <div>
                        <a href = '/' >Home</a>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                {this.state.columns.map((col) => 
                                    <th>
                                        {col}
                                    </th>
                                )}
                            </tr>
                        </thead>
                        <tbody>
                                {items.map((item) => 
                                    <tr>
                                        <td>
                                            <Link to = {"/users/"+item.id}>{item.id}</Link>
                                        </td>
                                        <td>
                                            {item.name}
                                        </td>
                                        <td>
                                            {item.username}
                                        </td>
                                        <td>
                                            {item.email}
                                        </td>
                                        <td>
                                            {item.phone}
                                        </td>
                                        <td>
                                            {item.website}
                                        </td>
                                    </tr>
                                )}
                        </tbody>
                    </table>

                </div>
            )
        }
    }
}
export default Users;