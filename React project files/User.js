import React, { Component } from 'react';

class User extends Component{

    constructor(props)
    {
        super();
        this.state = {
            userId: 2,
            posts: [],
            isLoaded: false,
            error: null,
            collumns: ["User Id", "Post Id", "Post Title", "Post Body"]

        }
        
    }

    componentDidMount()
    {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({isLoaded: true, posts: result})},
            (error) => {this.setState({isLoaded: true, error})}
        )
        this.setState({userId: Number(this.props.match.params.id)})
    }


    render(){

        const {error, isLoaded, posts } = this.state;
        
        if(error)
        {
            return <div>Error: {error.message}</div>;
        }
        else if(!isLoaded)
        {
            return <div>Loading...</div>;
        }
        else    
        {
            return(
                <div>
                    <table>
                        <thead>
                            <tr>
                                {this.state.collumns.map((col) =>
                                    <th>
                                        {col}
                                    </th>
                                )}
                            </tr>
                        </thead>
                        <tbody>
                            {posts.map((post) =>
                                {if (post.userId === this.state.userId){ 
                                    return(
                                        <tr>
                                            <td>
                                                {post.userId}
                                            </td>
                                            <td>
                                                {post.id}
                                            </td>
                                            <td>
                                                {post.title}
                                            </td>
                                            <td>
                                                {post.body}
                                            </td>
                                        </tr>
                                    )
                                }
                                }
                            )}
                        </tbody>
                    </table>
                </div>
            )
        }
    }
}
export default User;