import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import { InjectedFormProps, reduxForm } from 'redux-form';
import { login } from '../../redux/authReducer';
import { appStateType } from '../../redux/reduxStore';
import { required } from '../../utils/validators/validators';
import { createField, Input } from '../common/formsControls/formsControls';
import classes from '../common/formsControls/formsControls.module.css';

type LoginFormOwnProps = {
    captchaUrl: string | null
}
export type LoginFormValuesType = {
    email: string,
    password: string,
    rememberMe: boolean,
    captcha: string
}
export type LoginFormValuesKeysType = Extract<keyof LoginFormValuesType, string>

const LoginForm: React.FC<InjectedFormProps<LoginFormValuesType, LoginFormOwnProps> & LoginFormOwnProps> = ({ handleSubmit, error, captchaUrl }) => {
    return (
        //e.preventDefault ->
        //get all form data and put them to object ->
        //props.onSubmit(formData)
        <form onSubmit={handleSubmit} >
            {createField<LoginFormValuesKeysType>("email", "email", Input, [required])}
            {createField<LoginFormValuesKeysType>("password", "password", Input, [required], { type: 'password' })}
            {createField<LoginFormValuesKeysType>(undefined, "rememberMe", Input, [], { type: "checkbox" }, "remember me")}
            {captchaUrl && <img alt="captcha" src={captchaUrl} />}
            {captchaUrl && createField<LoginFormValuesKeysType>("symbols from image", "captcha", Input, [required], {})}
            {error && <div className={classes.formSummaryError}>{error}</div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )

}

const LoginReduxForm = reduxForm<LoginFormValuesType, LoginFormOwnProps>({ form: 'login' })(LoginForm);

export const Login: React.FC = (props) => {

    const captchaUrl = useSelector((state: appStateType) => state.auth.captchaUrl);
    const isAuth = useSelector((state: appStateType) => state.auth.isAuth);
    const dispatch = useDispatch();


    //all values from data
    const onSubmit = (formData: LoginFormValuesType) => {
        dispatch(login(formData.email, formData.password, formData.rememberMe, formData.captcha));
    }
    if (isAuth) {
        return <Redirect to={"/Profile"} />
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={captchaUrl} />
        </div>)
}
