import classes from './formsControls.module.css';
import React  from 'react';
import { Field, WrappedFieldMetaProps, WrappedFieldProps} from 'redux-form';
import { FieldValidateType } from '../../../utils/validators/validators';

type FormControlPropsType = {
    meta: WrappedFieldMetaProps
}

const FormControl: React.FC<FormControlPropsType> = ({meta: {touched, error}, children}) => {
    const hasError = touched && error;
    return (
        <div className={classes.formControl + " " + (hasError ? classes.error : '')}>
            {children}
            {hasError && <span>{error}</span>}
        </div>
    )
}
export const Textarea: React.FC<WrappedFieldProps> = (props) => {
    const {input, meta,  ...restProps} = props;
    //const {input, meta, child, ...restProps} = props;
    return (
        <FormControl {...props}>
            <textarea {...input} {...restProps} />
        </FormControl>
    )
}
export const Input: React.FC<WrappedFieldProps> = (props) => {
    const {input, meta, ...restProps} = props;
    //const {input, meta, child, ...restProps} = props;
    return (
        <FormControl {...props}>
            <input {...input} {...restProps} />
        </FormControl>
    )
}

export function createField<FormKeysType extends string> (
    placeholder: string | undefined, 
    name: FormKeysType, 
    component: React.FC<WrappedFieldProps>,
    validate: Array<FieldValidateType> , 
    props = {}, 
    text = "") {
        return (<div>
            <Field placeholder={placeholder} 
            name={name} 
            component={component} 
            validate={validate} 
            {...props}/> {text}
        </div>)  
    }
        
