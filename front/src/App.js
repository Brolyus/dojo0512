import React from 'react';
import './App.css';
import axios from 'axios';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      children: []
    }
  }
  deleteGift (id) {
     axios.delete(`http://localhost:8000/gifts/${id}`)
       .then(res => {
         
       })
  }

  componentDidMount() {
    axios.get(`http://localhost:8000/children`)
      .then(res => {
        const children = res.data;
        this.setState( {children} );
      })
  }

  render() {
    return (
    <div className="App">
      <header className="App-header">
      <ul>
        { this.state.children.map(gift => <li key={gift.id}>{gift.name}<button onClick = {() => this.deleteGift(gift.id)}>delete</button></li> )}
      </ul>
      </header>
    </div>
  );
  }
}

export default App;
