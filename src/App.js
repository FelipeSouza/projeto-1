import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

//Component de Classe
//Component Stateless
class App extends Component{
  //Toda vez que chamamos o constructor chamamos o props e o super
  //constructor(props){
   // super(props);
    //bind method para reconhecer o  this dentro  do  método
    //podemos remover o  bind se utilizarmos arrow function
    //this.handlePClick = this.handlePClick.bind(this);
    state={
    //this.state={
      name: 'Felipe Martins',
      counter:0
    };

  handlePClick=()=>{
    
   this.setState({name: 'Patrícia'});
  }

  /*Usando arrow function não precisa do this
    logo ele vai buscar/ herdar o  this da classe pai, então 
    teremos o proprio this*/
  handleAClick=(event)=>{
    //para o  evento principal
    event.preventDefault();
    const { counter } = this.state;
    this.setState({counter: counter + 1});
    
   }

  render(){
    //sem destructuring
    //const name = this.state.name;

    //Com destructuring
    const { name, counter } = this.state;
    return(
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={ this.handlePClick /*()=>console.log('<p> clicado')*/}>
          { name } {counter}
        </p>
        <a onClick={ this.handleAClick}
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Este é o link
        </a>
      </header>
    </div>
    );
  }
}



//Component de Função
//component statless
/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/
export default App;
