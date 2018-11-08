
import React, { Component } from 'react'
import PropTypes from "prop-types";

import classes from './Person.module.css'
import withClass from '../../../hoc/withClass';
import Aux from '../../../hoc/Auxiliary';
import { AuthContext } from '../../../containers/App';

class Person extends Component {

    constructor( props ) {
        super( props );
        console.log('[Person.js] Inside constructor', props);  
        this.inputElement = React.createRef();      
     }
    
    componentWillMount() {
        console.log('[Person.js] Inside componentWillMount()');
    }

    componentDidMount() 
    {
        console.log('[Person.js] Inside componentDidMount()');
        //this.focusInput();
        
    }

    focus() {
        this.inputElement.current.focus();//use current - new implementation        
    }

    render() {
        console.log('[Person.js] Inside Render()');
        return (
            <Aux>
                <AuthContext.Consumer>
                    {
                        /* This method receives one argument and this is the data we are passing down
                        with the context*/
                        auth => auth ? <p>I'm authenticated</p> : null                        
                    }
                    
                </AuthContext.Consumer>                
                <p onClick={this.props.click}>I'm { this.props.name } and I am { this.props.age } years old!</p>
                <p>{this.props.children}</p>
                <input
                    //ref = {(inp) => { this.inputElement = inp } } 
                    ref = { this.inputElement }//new implementation
                    type="text"
                    onChange={this.props.changed} 
                    value={this.props.name}/>
            </Aux>        
        );
    }
} 

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default withClass(Person, classes.Person);