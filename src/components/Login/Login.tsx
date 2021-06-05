import classes from '../common/formsControls/formsControls.module.css';
import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { InjectedFormProps, reduxForm } from 'redux-form';
import { login } from '../../redux/authReducer';
import { required } from '../../utils/validators/validators';
import { Input, createField} from '../common/formsControls/formsControls';
import { appStateType } from '../../redux/reduxStore';

type LoginFormOwnProps = {
    captchaUrl: string | null
}
export type LoginFormValuesType = {
    email: string,
    password: string,
    rememberMe: boolean,
    captcha: string
}
export type LoginFormValuesKeysType =  Extract<keyof LoginFormValuesType, string>
const LoginForm: React.FC<InjectedFormProps<LoginFormValuesType, LoginFormOwnProps> & LoginFormOwnProps> = ({ handleSubmit, error, captchaUrl }) => {
    return (
        //e.preventDefault ->
        //get all form data and put them to object ->
        //props.onSubmit(formData)
        <form onSubmit={handleSubmit} >
            {createField<LoginFormValuesKeysType>("email", "email", Input, [required])}
            {createField<LoginFormValuesKeysType>("password", "password", Input, [required], { type: 'password' })}
            {createField<LoginFormValuesKeysType>(undefined, "rememberMe", Input, [], { type: "checkbox" }, "remember me")}
            {captchaUrl && <img alt="captcha" src={captchaUrl}/>}
            {captchaUrl && createField<LoginFormValuesKeysType>("symbols from image", "captcha", Input, [required], {})}
            {error && <div className={classes.formSummaryError}>{error}</div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )

}

const LoginReduxForm = reduxForm<LoginFormValuesType, LoginFormOwnProps>({form: 'login'})(LoginForm);

type MapStatePropsType = {
    captchaUrl: string | null,
    isAuth: boolean
}
type MapDispatchPropsType = {
    login: (email: string, password: string, rememberMe: boolean, captcha: string) => void
}


const Login: React.FC<MapStatePropsType & MapDispatchPropsType> = (props) => {
    //all values from data
    const onSubmit = (formData: LoginFormValuesType) => {
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

const mapStateToProps = (state: appStateType): MapStatePropsType => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { login })(Login);