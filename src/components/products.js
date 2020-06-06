import React, { Component } from 'react';
import Product from './product';
import axios from 'axios';

class Products extends Component{

    state = {
        data:[]
    }

    componentDidMount(){
        axios.get('http://localhost/store_php/index.php')
        .then(res => {
            this.setState({data:res.data});
        })
        .catch(err => console.log(err))
    }

    render(){
        return(
            <div className="products">
                {this.state.data.map((item) => {
                    item.quantity = 1;
                    return <Product key={item.ProductID} item={item} />;
                })}
            </div>
        );
    }
}

export default Products;