import React, { Component } from 'react';
import Products from './products';

class Home extends Component{

    constructor(props){
        super(props);
        console.log(props);
    }

    render(){
       
        return(
            <React.Fragment>
            <section className="hero-section">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6" style={{perspective: '800px'}}>
                        <div className="card">
                                <img src={process.env.PUBLIC_URL+"/images/corona.png"} alt="Corona"/>
                                <h1>Protect yourself and loved ones from Corona</h1>
                                <h3>Stay At Home</h3>
                                <h3>Stay Away from Corona</h3>
                                <h3>Stay Safe</h3>
                        </div>
                        </div>
                        <div className="col-md-6">

                        </div>
                    </div>
                </div>
            </section>

            <section className='product-section'>
                <div className="container">
                    <h1>Store</h1>
                    <div className="row">
                        <Products />
                    </div>
                </div>
            </section>
            </React.Fragment>
        );
    }
}

export default Home;