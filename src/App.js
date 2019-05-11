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



  fun = ()=>{
    let a = document.getElementsByTagName('input')[0].value;
    a = a.replace(/^\s+/g, '');
    if(a!==""){
    a = a.toLowerCase();
    fetch("https://api.coingecko.com/api/v3/coins/"+a)
    .then(res => res.json())
    .then((result) => {
      this.setState({items : result,isLoadBody : true});
    }
  )
  }
  }



  render() {
    const {isLoad,items,isLoadBody} = this.state;
    if(!isLoad){
      return(
        <div>
        <h1>Crypto Wiki</h1>
        <h3>Loading The Coin List</h3>
        </div>
      )
    }
    else{
    return (
      <div>
      <h1>Crypto Wiki</h1>
      <input type="text" placeholder="Enter the Crypto Currency Name"/>
      <button onClick={this.fun}>Get Info About Coin</button><br/>
      <p>Search For a Coin</p>
      <Call description={items} loading={isLoadBody}/>
      </div>
    );

  }
  }
}
export default App;
