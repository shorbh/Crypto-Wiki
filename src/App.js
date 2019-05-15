import React, { Component } from 'react';
import Call from './Call';
import './App.css';
class App extends Component {


  constructor(){
    super();
    this.state = {
      isLoad : false,
      items: [],
      isLoadBody : false,
      a :""
    }
  }



  componentDidMount(){
    fetch("https://api.coingecko.com/api/v3/coins/list")
    .then(res => res.json())
    .then((result) => {
      this.setState({isLoad : true});
    })
  }
//in componentDidMount,there is api call which fetch cryptocoin list and help in setting coin Loading
//until searchbar appears


  fun = ()=>{
    //this function take coin value from searchbar and after that we call respective coin data through given api
    let a = document.getElementsByTagName('input')[0].value;
    a = a.replace(/^\s+/g, '');
    if(a!==""){
      a = a.toLowerCase();
      fetch("https://api.coingecko.com/api/v3/coins/"+a)
      .then(res => res.json())
      .then((result) => {
        this.setState({items : result,isLoadBody : true});
        //result will store in items
      }
    )
  }
}



render() {
  const {isLoad,items,isLoadBody} = this.state;
  if(!isLoad){
    //this will render until we load coin list
    return(
      <div>
      <h1>Crypto Wiki</h1>
      <h3>Loading The Coin List</h3>
      </div>
    )
  }
  else{
    //after the loading of list of coins this will render and state(isLoad) helped to do it
    return (
      <div>
      <h1>Crypto Wiki</h1>
      <input type="text" placeholder="Enter the Crypto Currency Name"/>
      <button onClick={this.fun}>Get Info About Coin</button><br/>
      <p>Search For a Coin</p>
      <Call description={items} loading={isLoadBody}/>
      {// call component will help to display the coin information in the required information
        //api result in the form of props we pass item and isLoadBody to it
      }
      </div>
    );

  }
}
}
export default App;
