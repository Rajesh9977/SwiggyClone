import React from "react";

class UserClass extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            userInfo : {
                name : 'dummy',
                location: 'default'
            }
        }
    }
    async componentDidMount(){
        const data = await fetch('https://api.github.com/users/Rajesh9977');
        const json = await data.json();
        console.log(json);

        this.setState({
            userInfo:json,
        })
        


    }
    render(){

        const {name, bio, id, avatar_url} = this.state.userInfo;
        return(
            <div className='user-card bg-zinc-500 w-53 m-5 text-zinc-300 h-60 flex flex-col justify-center items-center'>
                <img className='bg-zinc-400 w-40 h-30' src={avatar_url}/>
                <h2>Name : {name}</h2>
                <h2>Bio : {bio}</h2>
                <h3>Id : {id}</h3>
    
            </div>
        )
    }
}

export default UserClass;