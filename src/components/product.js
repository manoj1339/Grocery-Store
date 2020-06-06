import React, { Component } from 'react';
import { connect } from 'react-redux';
import { cart_product_add } from '../actions/cartActions';

class Product extends Component{

    addItem = (item) => {
        this.props.cart_product_add(item);
    }    

    render(){
        
        return(
            <div className="product-card">
                <div class="product-discount">20%<br/>off</div>
                <div className="product-image">
                    <img src={this.props.item.host+ '/' +this.props.item.ProductImage} alt={this.props.item.ProductCartDesc} />
                </div>
                <div className="product-title">
                    {this.props.item.ProductName}
                    <p className="small-desc">{this.props.item.ProductCartDesc}</p>
                </div>
                <div className="product-price">Rs {this.props.item.ProductPrice}</div>
                <div className="product-btns">
                    <div>
                        <button data-id={this.props.item.ProductID} 
                        className="button-secondary" 
                        style={{display: 'block', width: '100%'}}
                        onClick={() => this.addItem(this.props.item)}>
                            <span><i className="fa fa-shopping-cart" style={{fontSize:18, marginRight:'8px'}}></i></span>Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch)
{
    return {
        cart_product_add: (item) => {
            dispatch(cart_product_add(item));
        }
    }
}

export default connect(null, mapDispatchToProps)(Product);