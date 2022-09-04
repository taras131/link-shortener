import React, {FC} from "react";
import styles from "./input.module.scss";

interface IInput {
    name: string,
    labelName: string,
    placeholder: string,
    error?: string,
    value: string,
    type: "text" | "password",
    min: number,
    max: number,
    autofocus?: boolean,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input: FC<IInput> = ({
                               name, labelName, value, onChange,
                               error, placeholder, min,
                               max, type, autofocus = false,
                           }) => {
    return (
        <div className={styles.container}>
            <label htmlFor={name}>{labelName}</label>
            <input type={type}
                   id={name}
                   name={name}
                   value={value}
                   onChange={onChange}
                   placeholder={placeholder}
                   minLength={min}
                   maxLength={max}
                   autoFocus={autofocus}/>
            <span className={styles.error}>{error}</span>
        </div>
    );
};

export default Input;