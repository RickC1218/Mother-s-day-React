import { ChangeEvent, useState } from "react";

export const useForm = <T extends Object>(iniState: T) => {
    const [form, setForm] = useState(iniState);

    const handleChange = ({target}: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = target;

        setForm({
            ...form,
            [name]: value
        });
    }

    return {
        form,
        handleChange,
        ...form
    }

}