import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Register extends Component{

    state = {
        loading: false,
        email : {
            data: '',
            isActive: false,
            error : ''
        },
        mobile : {
            data: '',
            isActive: false,
            error : ''
        },
        password : {
            data: '',
            isActive: false,
            error : ''
        },
        cpassword : {
            data: '',
            isActive: false,
            error : '' 
        }
    }

    onChange = (e) => {


        if(e.target.value !== ''){
            this.setState({
                ...this.state,
               [e.target.name]: {
                   data: e.target.value,
                   isActive: true,
                   error: ''
               }
            })

            switch(e.target.name){
                case 'email':
                    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
                    if(!emailPattern.test(e.target.value))
                    {
                        this.setState({
                            ...this.state,
                            [e.target.name]: {
                                data: e.target.value,
                                isActive: true,
                                error: 'Email is invalid'
                            }
                         })
                    } 
                    break;

                case 'mobile':
                    let phoneno = /^\d{10}$/;
                    if(!phoneno.test(e.target.value)){
                        this.setState({
                            ...this.state,
                            [e.target.name]: {
                                data: e.target.value,
                                isActive: true,
                                error: 'Mobile should be numeric and 10 digits'
                            }
                         })
                    }
                    break;

                case 'password':
                    let length = e.target.value.length;
                    if(length < 6){
                        this.setState({
                            ...this.state,
                            [e.target.name]: {
                                data: e.target.value,
                                isActive: true,
                                error: 'Password should be greater than 6'
                            }
                            })
                    }
                    break;


                case 'cpassword':
                    if(e.target.value !== this.state.password.data){
                        this.setState({
                            ...this.state,
                            [e.target.name]: {
                                data: e.target.value,
                                isActive: true,
                                error: 'Both passwords should match'
                            }
                            })
                    }
                    break;

                default:
                    break;
            }
        }
        else
        {
            this.setState({
                ...this.state,
                [e.target.name]: {
                    data: e.target.value,
                    isActive: false,
                    error: ''
                }
             })
        }
        
    }

    handleSubmit = (e) => {
        e.preventDefault();

        let res = this.state;

        let shouldSubmit = false;
        let values = Object.values(res);
        let keys = Object.keys(res);

        for(let i=0; i < keys.length; i++){
            if(keys[i] === 'loading')
            {
                continue;
            }
            else if(!(values[i].isActive && values[i].error === '')){
                shouldSubmit = false;
                console.log(this.state);
                break;
            }
            else
            {
                shouldSubmit = true;
            }
        }
        
        if(shouldSubmit){

            this.setState({
                ...this.state,
                loading: true
            });

            axios.post('http://localhost/store_php/register.php',
            {
                email: this.state.email.data,
                password: this.state.password.data,
                mobile: this.state.mobile.data
            })
            .then(res => {

                if(res.data.error === 'Email already exists')
                {
                    this._input.focus();
                    this.setState({
                        ...this.state,
                        loading: false,
                        email: {
                            data: this.state.email.data,
                            isActive: true,
                            error: "This Email already exists"
                        }
                    });
                }
                else if(res.data.error === 'No Error')
                {
                    sessionStorage.setItem('token', res.data.token);
                    this.props.history.push('/');
                }
            })
            .catch(err => console.log(err))
        }
        

    }

    render(){
        return(
            <section className='register-form-section'>
                <div className="container">
                    <div className="register-box">
                        <form method="post" onSubmit={this.handleSubmit}>
                        <p style={{textAlign:'center'}}>
                            <i style={{fontSize:'40px'}} className="fa fa-user-circle"></i>
                        </p>
                        <h1>
                            Registration
                        </h1>
                        <div>
                            <input ref={el => this._input = el} type="text" name="email" onChange={this.onChange} className={this.state.email.isActive ? 'focus' : ''}/>
                            <label>Email</label>                            
                        </div>
                        <span style={{color: 'red', fontWeight:'bold'}}>
                            {this.state.email.error !=='' ?  this.state.email.error : ''}
                        </span>

                        <div>
                            <input type="text" name="mobile" onChange={this.onChange} className={this.state.mobile.isActive ? 'focus' : ''}/>
                            <label>Mobile No</label>
                        </div>
                        <span style={{color: 'red', fontWeight:'bold'}}>
                            {this.state.mobile.error !=='' ?  this.state.mobile.error : ''}
                        </span>

                        <div>
                            <input type="password" name="password" onChange={this.onChange} className={this.state.password.isActive ? 'focus' : ''}/>
                            <label>Password</label>
                        </div>
                        <span style={{color: 'red', fontWeight:'bold'}}>
                            {this.state.password.error !=='' ?  this.state.password.error : ''}
                        </span>

                        <div>
                            <input type="password" name="cpassword" onChange={this.onChange} className={this.state.cpassword.isActive ? 'focus' : ''}/>
                            <label>Confirm Password</label>
                        </div>
                        <span style={{color: 'red', fontWeight:'bold'}}>
                            {this.state.cpassword.error !=='' ?  this.state.cpassword.error : ''}
                        </span>

                        <div style={{textAlign:'center'}}>
                            Already have an account ?<Link to='/login'>Log In here</Link>
                            <input className="button-secondary" type="submit" name="submit" value={this.state.loading ? 'Loading...' : 'Submit'} />
                        </div>
                        </form>
                    </div>
                    
                </div>
            </section>
        );
    }
}

export default Register;