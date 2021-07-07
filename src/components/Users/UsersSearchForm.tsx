import React from 'react';
import { Form, Formik, Field } from 'formik';
import { FilterType } from '../../redux/usersReducer';

const usersSearchFormValidate = (values: any) => {
    const errors = {};
    return errors;
};
type PropsType = {
    onFilterChanged: (filter: FilterType) => void
}
export const UsersSearchForm: React.FC<PropsType> = (props) => {
    const submit = (values: FilterType, { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void; }) => {
        props.onFilterChanged(values)
    };
    return (
        <div>
            <Formik
                initialValues={{ term: '' }}
                validate={usersSearchFormValidate}
                onSubmit={submit}>
                {({ isSubmitting }) => (
                    <Form>
                        <Field type="text" name="term" />
                        <button type="submit" disabled={isSubmitting}>
                            Submit
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};
