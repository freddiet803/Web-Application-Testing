import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Display} from './components/Display.js';
import {Dashboard} from './components/Dashboard.js'

class App extends React.Component {
    // const [atBatInfo, setAtBatInfo] = useState({
    //   balls: 0,
    //   strikes: 0,
    //   hits: 0,
    //   fouls: 0
    // })
    // const incrementChange = e =>{
    //   e.preventDefault();
    //   setAtBatInfo({...atBatInfo,[e.target.name]: e.target.value + 1 });
    // }
    constructor(){
      super();
      this.state= {
        balls: 0,
        strikes: 0, 
        hits: 0, 
        fouls: 0
      }
    }


      increaseBalls = () =>{
        
        this.setState({
          balls: this.state.balls +1
        })
        if(this.state.balls ==4){
          alert('You Walked');
          this.setState({
            
            strikes: 0,
            balls: 0,
            fouls: 0

          })
        }
        console.log(this.state);
      }



  increaseStrikes = () =>{
    
        this.setState({
          strikes: this.state.strikes +1
        });
        if(this.state.strikes == 3){
          alert("Your Out!");
          this.setState({
            
            strikes: 0,
            balls: 0,
            fouls: 0
    
          })
        }
        
        console.log(this.state);
      }
    increaseFouls = () =>{
          
          this.setState({
            fouls: this.state.fouls +1
          });
          if(this.state.strikes <2){
            this.setState({
              strikes: this.state.strikes +1
            });
            
          }
          console.log(this.state);}
     
          increaseHits = () =>{
            
            this.setState({
              hits: this.state.hits +1,
              strikes: 0,
              balls: 0,
              fouls: 0
            });
            console.log(this.state);}

            resetBat = ()=>{
              this.setState({
                hits: 0,
                strikes: 0,
                balls: 0,
                fouls: 0
              });
            }

    

    

    
render(){
  return (
    <div className="App">
      <header className="App-header">
        <Display batInfo={this.state} />
        <Dashboard reset={this.resetBat} hits={this.increaseHits} balls={this.increaseBalls} fouls={this.increaseFouls} strikes={this.increaseStrikes}/>
      </header>
    </div>
  );
}


}


export default App;
