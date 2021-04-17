import classes from '../common/formsControls/formsControls.module.css';
import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { reduxForm } from 'redux-form';
import { login } from '../../redux/authReducer';
import { required } from '../../utils/validators/validators';
import { Input, createField } from '../common/formsControls/formsControls';

const LoginForm = ({ handleSubmit, error, captchaUrl }) => {
    return (
        //e.preventDefault ->
        //get all form data and put them to object ->
        //props.onSubmit(formData)
        <form onSubmit={handleSubmit} >
            {createField("email", "email", Input, [required])}
            {createField("password", "password", Input, [required], { type: 'password' })}
            {createField(null, "rememberMe", Input, [], { type: "checkbox" }, "remember me")}
            {captchaUrl && <img alt="captcha" src={captchaUrl}/>}
            {captchaUrl && createField("symbols from image", "captcha", Input, [required], {})}
            {error && <div className={classes.formSummaryError}>{error}</div>}
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
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
    }
    if (props.isAuth) {
        return <Redirect to={"/Profile"} />
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
        </div>)
}

const mapStateToProps = (state) => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { login })(Login);