import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
   constructor(props) {
       super(props);
       this.state = {
        username:null
       };
     }
     componentDidMount() {
        fetch('http://localhost:3000/api')
      .then(res=>res.json())
      .then(data=>this.setState({username:data.username}));
    }
   render() {
      const {username} = this.state;
      return (
        <div className="App">
        <header className="App-header">
        {username ? `${username[0]}` :"값이 안넘어온다."}
        {username ? `${username[1]}` :"값이 안넘어온다."}
        {username ? `${username[2]}` :"값이 안넘어온다."}
        {username ? `${username[3]}` :"값이 안넘어온다."}
        </header>
        </div>
      );
       ;
      }
    }


export default App;
