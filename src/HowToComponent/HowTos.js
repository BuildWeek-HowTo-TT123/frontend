import React, { Component } from 'react';
import HowToItem from './HowToItem';
import PropTypes from 'prop-types';

class HowTos extends Component{
    
    render(){
        
        return(
           this.props.howTos.map((howto) => (
           <HowToItem key={howto.id} howto={howto}
            markComplete={this.props.markComplete}
            delHowTo={this.props.delHowTo} />
           ))
        )
    }
}

/// PropTypes
HowTos.propTypes = {
    howTos: PropTypes.array.isRequired,
    markComplete: PropTypes.func.isRequired,
    delHowTo: PropTypes.func.isRequired,
}
export default HowTos;