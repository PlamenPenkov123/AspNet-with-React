import React, {useState} from "react";
import { Grid,TextField,Button } from "@mui/material";
import useForm from "./useForm";

const initialFieldValues = {
    fullName: '',
    email: ''
}

const PeopleForm = (props) =>{

    const { values, setValues} = useState(initialFieldValues);

    const handleInputChange = event => {
        const {name, value} = event.target
        setValues({
            ...values,
            [name] : value
        })
    }
    // const {
    //     values,
    //     setValues,
    //     handleInputChange
    // } = useForm(initialFieldValues)

    const handleSubmit = e => {
        e.preventDefault()
        console.log(values)
    }

    return (
        <form autoComplete = "off" noValidate onSubmit={handleSubmit}>
            <Grid container>
                <Grid item xs = {6}>
                    <TextField
                    name="fullName"
                    variant="outlined"
                    label="Full Name"
                    value={values.fullName}
                    onChange={handleInputChange} />
                    <TextField
                    name="email"
                    variant="outlined"
                    label="Email"
                    value={values.email}
                    onChange={handleInputChange} />
                    <Button
                    variant = "contained"
                    color = "primary"
                    type = "submit"
                    >
                        Submit
                    </Button>
                    <Button
                    variant = "contained"
                    color = "light"
                    >
                        Reset
                    </Button>
                </Grid>
            </Grid>
        </form>
    );
};

export default PeopleForm;