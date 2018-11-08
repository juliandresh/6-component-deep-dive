import React, { Component } from 'react';

// const withClass = (WrappedComponent, className) => {

//     return( props ) => (
//         <div className={className}>
//             <WrappedComponent {...props} />
//         </div>
//     )
// }

const withClass = (WrappedComponent, className) => {
    const WithClass = class extends Component { 
     render() {
         return (
            <div className={className}>
                <WrappedComponent ref={ this.props.forwardedRef } {...this.props} />
            </div>
         )
     }
    }

    //It works like a tunnel to allow communication between Persons and Person component avoiding
    //to pass on the HOC withClass
    return React.forwardRef((props, ref) => {
        return <WithClass {...props} forwardedRef={ref} />
    });
}

export default withClass;