//custom hook
import { useState, useEffect } from 'react';

const useForm = (callBack, validate) => {
    const [values, setValues ] = useState({
        userName: "",
        email: "",
        password: "",
        password2: ""
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleChange = e => {
        //updating the values
        setValues({
            ...values,
            //targeting the name of each input (e short for event)
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = e => {
        //prevents from refreshing everytime you submit
        e.preventDefault();
        //checks for errors with given values
        setErrors(validate(values));
        //releases success form
        setIsSubmitting(true);
    };

    useEffect(() => {
        //If theres noting in the errors list and user is submitting, send user registration
        if (Object.keys(errors).length === 0 &&
            isSubmitting) {
            callBack();
        }
    },[errors]
    );

    return { handleChange, values, handleSubmit, errors };
}

export default useForm;
