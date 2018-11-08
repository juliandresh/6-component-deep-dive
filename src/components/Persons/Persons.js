import React, { PureComponent } from 'react';
import Person from './Person/Person';

//PureComponent--> Este tipo de componentes están optimizados para una mayor performance de renderizado, 
//ya que solo cambian si detectan un cambio en sus props y estos son distintos a los valores anteriores.
class Persons extends PureComponent {

    constructor( props ) {
        super( props );
        console.log('[Persons.js] Inside constructor', props);      
        this.lastPersonRef = React.createRef();
     }
    
    componentWillMount() {
    console.log('[Persons.js] Inside componentWillMount()');
    }

    componentDidMount() 
    {
        console.log('[Persons.js] Inside componentDidMount()');
        this.lastPersonRef.current.focus();
    }

    componentWillReceiveProps(nextProps) {
        console.log('[UPDATE Persons.js] Inside componentWillReceiveProps()', nextProps);
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('[UPDATE Persons.js] Inside shouldComponentUpdate()', nextProps, nextState);
    //     return nextProps.persons !== this.props.persons || 
    //     nextProps.changed !== this.props.changed ||
    //     nextProps.clicked !== this.props.clicked;
    //     // return true;
    // }

    componentWillUpdate(nextProps, nextState) {
        console.log('[UPDATE Persons.js] Inside componentWillUpdate()', nextProps, nextState);
    }

    componentDidUpdate() {
        console.log('[UPDATE Persons.js] Inside componentDidUpdate()');        
    }

    render() {
        console.log('[Persons.js] Inside render()');
        return this.props.persons.map( (person, index) => {              
            return <Person 
              click = {() => this.props.clicked(index)}
              position ={index}
              name = {person.name} 
              age = {person.age}     
              ref = {this.lastPersonRef}                             
              key= {person.id}                  
              changed ={(event) => this.props.changed(event, person.id)}
            />                  
          }); 
    }
} 

export default Persons;
