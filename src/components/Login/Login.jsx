import classes from '../common/formsControls/formsControls.module.css';
import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { Field, reduxForm } from 'redux-form';
import { login } from '../../redux/authReducer';
import { required } from '../../utils/validators/validators';
import { Input } from '../common/formsControls/formsControls';

const LoginForm = (props) => {
    return (
        //e.preventDefault ->
        //get all form data and put them to object ->
        //props.onSubmit(formData)
        <form onSubmit={props.handleSubmit} >
            <div>
                <Field placeholder={"email"} name={'email'} component={Input} validate={[required]} />
            </div>
            <div>
                <Field placeholder={"password"} name={'password'} component={Input} validate={[required]} />
            </div>
            <div>
                <Field type={"checkbox"} name={'rememberMe'} component={Input} /> Remember me
            </div>
            { props.error && <div className={classes.formSummaryError}>{props.error}</div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )

}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm);

const Login = (props) => {
    //all values from data
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    }
    if (props.isAuth) {
        return <Redirect to={"/Profile"} />
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>)
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { login })(Login);