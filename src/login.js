import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import fireb from './config/fireb';

class login extends Component {

    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.signup=this.signup.bind(this);
        this.state = {
            email: '',
            password: ''
        }
    }

    login(e) {
        e.preventDefault();
        fireb.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
        }).catch((error) => {
            console.log(error);
        });
    }

    signup(e) {
        e.preventDefault();
        fireb.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
        }).catch((error) => {
                console.log(error);
            })
    }


    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return (
            <div className="col-md-6">
                <form>
                    <div className="form-group">
                        <label for="exampleInputemail">CORREO ELECTRONICO</label>
                        <input value={this.state.email} onChange={this.handleChange} type="email" name="email"
                            class="form-control" id="exampleInputEmail" aria-describedby="emailHelp"
                            placeholder="enter email" />
                        <small id="emailHelp" class="form-text text-muted">COLOQUE EL CORREO</small>
                    </div>
                    <div class="form-group">
                        <label form="exampleInputPassword1">CONTRASEÑA</label>
                        <input value={this.state.password} onChange={this.handleChange} type="password"
                            name="password" class="form-control" id="exampleInputpassword1" placeholder="password" />
                    </div>
                    <button type="submit" onClick={this.login} class="btn btn-primary">login</button>
                    <button onClick={this.signup} style={{ marginLeft: '25px' }} className="btn btn-succes">signup</button>
                </form>
            </div>
        );
    }
}


export default login;

