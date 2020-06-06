import React, {Component} from 'react';
import Logo from '../logo.png';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


class Nav extends Component{

    render(){
        
        return(
            <header>
              <div className="logo">
                  <img src={Logo} alt="Logo" />
              </div>
              <div className="hamburger">
                  <i className="fa fa-bars" style={{fontSize:26, marginLeft:3}}></i><span style={{fontSize:18}}>Menu</span>
              </div>
              <div className="nav-links">
                  <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/store">Store</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li>
                            <span>{this.props.res.length}</span>
                            <Link to="/cart"><i className="fa fa-shopping-cart" aria-hidden="true" style={{fontSize:25}}></i></Link>
                        </li>
                        <li><Link to="/login"><i className="fa fa-user" aria-hidden="true" style={{fontSize:25}}></i></Link></li>
                  </ul>
              </div>
            </header>
          );
    }

}

function mapStateToProps(state){
    return {
        res: state
    }
}

export default connect(mapStateToProps)(Nav);
