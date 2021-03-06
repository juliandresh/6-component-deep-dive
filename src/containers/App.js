
import React, { PureComponent } from 'react';
import classes from './App.module.css';
import Persons from '../components/Persons/Persons';
import CockPit from '../components/Cockpit/Cockpit';
import Aux from '../hoc/Auxiliary';
import withClass from '../hoc/withClass';

export const AuthContext = React.createContext(false);

//PureComponent--> Este tipo de componentes están optimizados para una mayor performance de renderizado, 
//ya que solo cambian si detectan un cambio en sus props y estos son distintos a los valores anteriores.
class App extends PureComponent {

    constructor( props ) {
    super( props );
    console.log('[App.js] Inside constructor', props);
    this.state = {
      persons: [
        {id: 'abc', name:'Julián', age: 33},
        {id: 'def', name:'Chelita', age: 31},
        {id: 'ghi', name:'Lucky', age: 10},      
      ],
      otherState: 'some other value',
      showPersons: false,
      toggleClicked: 0,
      authenticated: false
    };
  }

  componentWillMount() {
    console.log('[App.js] Inside componentWillMount()');
  }

  componentDidMount() 
  {
    console.log('[App.js] Inside componentDidMount()');
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[UPDATE App.js] Inside shouldComponentUpdate()', nextProps, nextState);
  //   return nextState.persons !== this.state.persons || 
  //   nextState.showPersons !== this.state.showPersons;
  //   //return false;
  // }

  componentWillUpdate(nextProps, nextState) {
      console.log('[UPDATE App.js] Inside componentWillUpdate()', nextProps, nextState);
  }

  componentDidUpdate() {
      console.log('[UPDATE App.js] Inside componentDidUpdate()');
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
    this.setState( (prevState, props ) => {
      console.log('PREVSTATE: ', prevState);
      return {        
        showPersons:!doesShow, 
        toggleClicked: prevState.toggleClicked + 1
      }
    } );
  }

  loginHandler = () => {
    this.setState({authenticated: true});
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
        
      <Aux>      
        <button onClick={ () =>{this.setState({showPersons: true})} }>Show Persons</button>   
        <CockPit 
          appTitle = {this.props.title}
          showPersons={this.state.showPersons}
          persons = {this.state.persons}
          clicked = {this.togglePersonsHandler}
          login= {this.loginHandler}
        />
        {/* We are providing this context to all child components in there, no matter
            on wich level they are
        */}
        <AuthContext.Provider value={this.state.authenticated}>
          { personas }
        </AuthContext.Provider>           
        
      </Aux>    
    );

    // return React.createElement('div', { className:'App' },null, React.createElement('h1', null, 'Hi, I am a React App'));
  }
}

export default withClass(App, classes.App);
