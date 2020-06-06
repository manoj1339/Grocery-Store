import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';

class CartItem extends Component{


    render(){

        const buttonStyle = {
            padding: '5px',
            border: 'none',
            outline: 'none',
            color: 'white',
            fontWeight: 'bold',
            background: 'gray'        
        }

        return(
            <React.Fragment>
                <tr>
                    <td>{this.props.item.ProductID}</td>
                    <td>{this.props.item.ProductName}</td>
                    <td>{this.props.item.ProductPrice}</td>
                    <td>
                        <button style={buttonStyle} onClick={this.props.onDecrement}>-</button>
                        <span style={{fontSize: '18px', margin: '0 5px'}}><strong>{this.props.item.quantity}</strong></span>
                        <button style={buttonStyle} onClick={this.props.onIncrement}>+</button>
                    </td>
                    <td style={{fontSize: '18px'}}><strong>{this.props.item.quantity * this.props.item.ProductPrice}</strong></td>
                    <td>
                        <button title="Delete" onClick={this.props.onDelete} className="button-secondary">
                            <span><i className="fa fa-trash" style={{fontSize:18}}></i></span>
                        </button>
                    </td>
                </tr>
                
            </React.Fragment>
        );
    }
}

export default CartItem;