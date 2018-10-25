
import React, { Component } from 'react';
import classes from './App.module.css';
import Persons from '../components/Persons/Persons';
import CockPit from '../components/Cockpit/Cockpit';

class App extends Component {

  constructor( props ) {
    super( props );
    console.log('[App.js] Inside constructor', props);
    this.state = {
      persons: [
        {id: 'abc', name:'Julián', age:'33'},
        {id: 'def', name:'Chelita', age:'31'},
        {id: 'ghi', name:'Lucky', age:'10'},      
      ],
      otherState: 'some other value',
      showPersons: false
    }
  }

  componentWillMount() {
    console.log('[App.js] Inside componentWillMount()');
  }

  componentDidMount() 
  {
    console.log('[App.js] Inside componentDidMount()');
  }

  // state = {
  //   persons: [
  //     {id: 'abc', name:'Julián', age:'33'},
  //     {id: 'def', name:'Chelita', age:'31'},
  //     {id: 'ghi', name:'Lucky', age:'10'},      
  //   ],
  //   otherState: 'some other value',
  //   showPersons: false
  // }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons:persons});
  }

  nameChangedHandler = ( event, id ) => {
    console.log(id);
    const personIndex = this.state.persons.findIndex(p => {            
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;
    
    const persons =[...this.state.persons];
    persons[personIndex] = person;

    this.setState( {persons: persons})
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState( {showPersons:!doesShow} );
  }

  render() {
    
    console.log('[App.js] Inside Render');
    let personas = null;

    if( this.state.showPersons ) {      
      personas = <Persons 
            persons = {this.state.persons } 
            clicked = { this.deletePersonHandler}
            changed ={this.nameChangedHandler}
          />          
    }

    return (      
        
      <div className={classes.App}>         
        <CockPit 
          appTitle = {this.props.title}
          showPersons={this.state.showPersons}
          persons = {this.state.persons}
          clicked = {this.togglePersonsHandler}
        />                   
        { personas }
      </div>    
    );

    // return React.createElement('div', { className:'App' },null, React.createElement('h1', null, 'Hi, I am a React App'));
  }
}

export default App;