
import React, { Component } from 'react'

const btnStyle = {
    background: '#ffd300',
    color: 'red',
    border: 'none',
    padding: '4px 9px',
    borderRadius: '75%',
    cursor: 'pointer',
    float: 'right'
}


export class HowToItem extends Component {
    getStyle = () => {
         return {
             textDecoration: this.props.todo.completed ? 'line-through' : 'none',
             background: '#f4f4f4',
             padding: '10px',
             borderBottom: '1px #cc dotted',
    
         }

    }

 
    
    render() {
        const {id, title} = this.props.howto;
        return (
            <div style={this.getStyle()}>
                <p>
                    <input type='checkbox' onChange={this.props.markComplete.bind(this, id)} /> {' '}
                    {title}
                    <button onClick={this.props.delHowTO.bind(this, id)} style={btnStyle}>x</button>
                    </p>
            </div>
        )
    }
}


export default HowToItem;
