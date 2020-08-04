import React, { Component, Fragment } from 'react'
import axios from 'axios'
import UserCard from './Components/UserCard'
import FollowersList from './Components/FollowersList'

export class App extends Component {
  constructor(){
    super();
    this.state={
      followers:[],
      user:{}
    }
  }

  componentDidMount(){
    axios.get('https://api.github.com/users/jdulay91')
    .then(res=>{
      this.setState({user:res.data})
             
    })
    axios.get('https://api.github.com/users/jdulay91/followers')
    .then(followers=>{
      this.setState({followers:followers.data})
      console.log(this.state.followers)          
    })

  }
  render() {
    return (
      <Fragment>
        <UserCard user={this.state.user} />
        <FollowersList followers={this.state.followers}/>        
      </Fragment>
    )
  }
}

export default App
