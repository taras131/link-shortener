import {useCallback, useState} from "react";

const useFormWithValidation = (initialValues, initialErrors) => {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState(initialErrors);
    const [isValid, setIsValid] = useState(false);

    const handleChange = (evt) => {
        const {target} = evt;
        const {name, value} = target;
        setValues({...values, [name]: value});
        setErrors({...errors, [name]: target.validationMessage});
        setIsValid(target.closest("form").checkValidity());
    };

    const resetForm = useCallback(
        (newValues = {}, newErrors = {}, newIsValid = false) => {
            setValues(newValues);
            setErrors(newErrors);
            setIsValid(newIsValid);
        },
        [setValues, setErrors, setIsValid]
    );

    return {
        values,
        handleChange,
        errors,
        isValid,
        resetForm,
        setValues,
        setIsValid,
    };
};
export default useFormWithValidation;
