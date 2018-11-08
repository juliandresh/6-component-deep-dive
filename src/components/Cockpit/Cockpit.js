import React from 'react';

import classes from './Cockpit.module.css'
import Aux from '../../hoc/Auxiliary';

const cockpit = (props) => {

    const assignedClasses = [];
    let btnClass = classes.Button;

    if(props.showPersons)
    {
        btnClass = [classes.Button, classes.Red].join(' ');
    }

    if(props.persons.length <=2 ) {
      assignedClasses.push(classes.red);//classes=['red']
      //console.log(assignedClasses);
    }

    if(props.persons.length <=1 ) {
      assignedClasses.push(classes.bold);//classes=['red', 'bold']
      //console.log(assignedClasses);
    }

    return (
        <Aux>
            <h1>{props.appTitle}</h1>
            <p className={ assignedClasses.join(' ') }>This is really working!</p>
            <button
                className={btnClass} 
                onClick={props.clicked}>Toogle Persons
            </button>     
            <button onClick={ props.login }>Log in</button>
        </Aux>
    );
};


export default cockpit;