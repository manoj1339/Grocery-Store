import React, { Component } from 'react';
import CartItem from  './cartItem';
import {connect} from 'react-redux';
import {item_increment, item_decrement, cart_product_delete} from '../actions/cartActions';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

class Cart extends Component{

    handleDelete = (key) =>{
        this.props.cart_product_delete(key.id);
    }

    increment = (key) => {
        this.props.item_increment(key);
    }

    decrement = (key) => {
        this.props.item_decrement(key);
    }


    render(){
        var grand_total = 0;

        return(
            <section className="cart-section">
                <div className="container">
                    <h1 onClick={() => this.props.add_product()}>Your cart</h1>
                    <table className="table table-responsive">
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                        <TransitionGroup component={null}>
                        
                        {this.props.data.map((item) => {
                            const id = item.ProductID;
                            grand_total = grand_total + (item.ProductPrice * item.quantity);

                            return (
                                <CSSTransition
                                timeout={500}
                                classNames="fade"
                                key={item.ProductID}>
                                    <CartItem 
                                        key={item.ProductID} 
                                        item={item} 
                                        onDelete={() => this.handleDelete({id})}
                                        onIncrement={()=> this.increment(id)}
                                        onDecrement={()=> this.decrement(id)}  />
                                </CSSTransition>
                            )
                        })}
                        </TransitionGroup>
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colSpan={3}>
                                </td>
                                <td style={{fontSize: '20px'}}>
                                    <h3 style={{margin: '0px'}}><strong>Grand Total</strong></h3>
                                </td>
                                <td colSpan={2} style={{fontSize: '20px'}}><strong className="grand-total">{grand_total}</strong></td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </section>
        );
    }
}

function mapStateToProps(state){
    return {
        data: state
    }
}

function mapDispatchToProps(dispatch){
    return {
        item_increment: (id) => {
            dispatch(item_increment(id));
        },
        item_decrement: (id) => {
            dispatch(item_decrement(id));
        },
        cart_product_delete: (id) => {
            dispatch(cart_product_delete(id));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
