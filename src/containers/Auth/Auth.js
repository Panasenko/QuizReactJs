import React, {Component} from 'react';
import classes from './Auth.css'
import Button from '../../components/UI/Button/Button'
import Input from '../../components/UI/Input/Input'


class Auth extends Component {

    state = {
        formControls: {

        }
    }

    loginHandler = () => {

    }

    registerHandler = () => {

    }

    submitHandler = event => {
        event.preventDefault()
    }

    render() {
        return (
            <div className={classes.Auth}>
                <div>
                    <h1>Авторизация</h1>
                    <form onSubmit={this.submitHandler} className={classes.AuthForm}>
                        <Input label="Email"/>
                        <Input label="Password"/>
                        <Button type="success" onClick={this.loginHandler}>Войти</Button>
                        <Button type="primary" onClick={this.registerHandler}>Регистрация</Button>
                    </form>
                </div>
            </div>
        )
    }

}

export default Auth;
