
import React, { Component } from 'react'
import PropTypes from "prop-types";

import classes from './Person.module.css'
import withClass from '../../../hoc/withClass';
import Aux from '../../../hoc/Auxiliary';

class Person extends Component {

    constructor( props ) {
        super( props );
        console.log('[Person.js] Inside constructor', props);        
     }
    
    componentWillMount() {
        console.log('[Person.js] Inside componentWillMount()');
    }

    componentDidMount() 
    {
        console.log('[Person.js] Inside componentDidMount()');
    }

    render() {
        console.log('[Person.js] Inside Render()');
        return (
            <Aux className={classes.Person} >
                <p onClick={this.props.click}>I'm { this.props.name } and I am { this.props.age } years old!</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} defaultValue={this.props.name}/>
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