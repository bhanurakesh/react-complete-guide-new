import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';



class App extends Component{

  state = {
      persons: [
          { id: 'asfgfg', name: 'Bhanu', age: 29},
          { id: 'vggf', name: 'Rakesh', age: 34},
          { id: 'bhfh', name: 'Aadyath', age: 1}
      ],
      otherstate: 'some other value',
      showPersons: false
    };


    // switchNameHandler = (newName) => {
    //   //console.log('was clicked');
    //   // DON'T DO THIS: this.state.persons[0].name = 'BhanuRekha';
    //   this.setState(
    //     {
    //       persons: [
    //         { name: newName, age: 29},
    //         { name: 'Rakesh', age: 34},
    //         { name: 'N V Aadyath', age: 1}
    //       ]
    //     });
    //   };
      
      deletePersonHandler = (personIndex) => {
         const newpersons = this.state.persons;
         newpersons.splice(personIndex,1);
         this.setState({
           persons: newpersons
         })
      }

      togglePersonHandler = () => {
        const doesShow  = this.state.showPersons;
        this.setState({
          showPersons: !doesShow
        });
      }

      nameChangedHandler = (event, id) => {
        const personIndex  = this.state.persons.findIndex( p=>{
          return p.id === id;
        }); 

        const person = {
          ...this.state.persons[personIndex]
        };

        // Alteranate approach to spread operator
        //const person = Object.assign({}, this.state.persons[personIndex])

        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState(
          {
            persons: persons 
          });
      }
    
    render() {

      const style = {
        backgroundColor : 'green',
        color : 'white',
        font: 'inherit',
        border: '1px solid skyblue',
        padding : '8px',
        cursor: 'pointer'

      };

      let persons = null;

      if(this.state.showPersons){
         persons = (
          <div>
            {this.state.persons.map((prsn,index) => {
              return <Person
              click = {() => this.deletePersonHandler(index)}
              name={prsn.name}
              age={prsn.age} 
              key = {prsn.id}
              changed = {(event) => this.nameChangedHandler(event, prsn.id)} />
            })}
          </div> 
         );

         style.backgroundColor = 'red';        
      }

      // let classes = ['red' , 'bold'].join(' ');

      const classes = [];
      if(this.state.persons.length <= 2){
        classes.push('red');
      }
      if(this.state.persons.length <= 1){
        classes.push('bold');
      }

    return (
      
      <div className="App">
        <h1> Hi , I'am React App </h1>
        <p className={classes.join(' ')}> This is really working </p>
        {/* <button 
                style ={style}
                onClick={() => this.switchNameHandler('BhanuRekha Vanam')}> 
                Switch Name 
        </button> */}
        <button
                style ={style}
                onClick={this.togglePersonHandler}>
                Toggle Persons               
        </button>
              {persons}
      </div>
    
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', 'null', 'Hi , I\'am React App'));

  
}
}

export default App;



