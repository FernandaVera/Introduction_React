import React from "react";
import axios from "axios";
import Formulario from "./Components/Formulario";
import Header from "./Components/Header";
import PostsList from "./Components/PostsList"
import "./index.css";
export default class app extends React.Component {
  constructor(props){
    super(props);
    this.state = {user: {
        userName: "Jluis",
        password: "123"
      },
      error: '',
      posts: []
    };

    this.logout = this.logout.bind(this);
    console.log('Mount phase: constructor')
    this.signin = this.signin.bind(this);
  }

  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((result) =>{
        this.setState({
          posts: result.data
        });
      });
  }

  signin(event){
    event.preventDefault();
    this.setState({user:{
    userName: "Wemanconnect",
    password: "holaweman"
  }
  });
  }

  logout(event) {
    event.preventDefault();

    this.setState({user: {
      userName: "",
      password: ""
      }
    }
  );
  }

  componentDidUpdate(){
    console.log('Updating phase: constructor')
  }

  componentWillUnmount(){
    console.log('Unmounting phase: constructor')
  }

  static getDerivedStateFromError(error){
    return {error: error};
  }
  componentDidCatch(error, info){
    console.log('Error phase: ' + error)
  }


  render (){
      return <div className="container">
    <Header 
      user={this.state.user.userName}
      logout={this.logout}
      signin={this.signin}
      />
    if (this.state.user.userName) {
        <Formulario 
        username={this.state.user.userName} 
        password={this.state.user.password} 
        />
    } else {
      <PostsList
      posts={this.state.posts}/>
    }
        <footer>By Weman Connect</footer>
      </div>
  };
  }
  
