import { useState } from "react";

function useForm(inicialform={}) {
    const[formState, setFormState] = useState(inicialform);

    const inputChange = ({target}) => {
        const {name, value} = target;
        setFormState({
            ...formState,
            [name]:value,
        });
    }
    const resetform=()=>{ 
        setFormState(inicialform);
    }
    return {
      formState,
      inputChange,
      resetform
    };
}

export default useForm;