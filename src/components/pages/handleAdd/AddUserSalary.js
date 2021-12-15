import "./addUserSalary.css";
import React, {useState} from "react";
import validator from "validator";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { makeStyles } from '@mui/styles';
import { Button } from "@mui/material";
import {useHistory} from 'react-router-dom';
import {useDispatch} from "react-redux";
import { addUser } from "../../reduxSalary/action";


export default function AddUserSalary() {

    const useStyles = makeStyles((them) => ({
        root: {
            marginTop: 10,
          '& > *': {
            m:1,
            width: '50ch',
          },
        },
      }));
      
    const classes = useStyles();
      
     const [state, setState] = useState({
         id: "",
         fullName: "",
         email: "",
         age: "",
         gender: "",
         coSalary: "",
         salary: ""
     });

     const {id, fullName, email, age, gender, coSalary, salary} = state;

     const [error, setError] = useState("");
     const dispatch = useDispatch();
     const history = useHistory();

     const handleInputChange = (e) => {
         let {name, value} = e.target;
         setState({...state, [name]:value});
     };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!id || !fullName || !email || !age || !gender || !coSalary || !salary) {
            setError("Please fill out all forms!");
        } else {
            if(validator.isEmail(email)) {
                dispatch(addUser(state));
                history.push("/salary");
                setError("");
            } else {
                setError("Enter valid Email");
            }
        }
    };

    return (
        <div className="addUserSalary">
            <Button
                    variant="contained"
                    color="primary"
                    style={{width:"100px", margin:3}}
                    onClick={() => history.push("/salary")}
                >
                    <box-icon name='arrow-back' color='#e8e2e2' ></box-icon>
            </Button>
            <h2>Add User</h2>
            {error && <h3 style={{color:"red"}}>{error}</h3>}
            <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}> 
                <TextField
                     style={{marginBottom:6}}
                     id="outlined-basic"
                     label="Enter ID" 
                     value={id} 
                     type="text"
                     name = "id"
                     onChange={handleInputChange}
                />
                <br/>
                <TextField
                     style={{marginBottom:6}}
                     id="outlined-basic"
                     label="Enter Full Name" 
                     value={fullName} 
                     type="text"
                     name = "fullName"
                     onChange={handleInputChange}
                />
                <br/>
                <TextField
                    style={{marginBottom:6}} 
                    id="outlined-basic" 
                    label="Enter Email" 
                    value={email} 
                    type="email"
                    name= "email"
                    onChange={handleInputChange}
                />
                <br/>
                <TextField 
                    style={{marginBottom:6}} 
                    id="outlined-basic" 
                    label="Gender" 
                    value={gender} 
                    type="text"
                    name= "gender"
                    onChange={handleInputChange}
                />
                <br/>
                <TextField 
                    tyle={{marginBottom:6}} 
                    id="outlined-basic" 
                    label="Age" 
                    value={age} 
                    type="number"
                    name="age"
                    onChange={handleInputChange}
                />
                <br/>
                <TextField 
                    style={{marginBottom:6}} 
                    id="outlined-basic" 
                    label="Coefficients salary" 
                    value={coSalary} 
                    type="text"
                    name="coSalary"
                    onChange={handleInputChange}
                />
                <br/>
                <TextField 
                    style={{marginBottom:6}} 
                    id="outlined-basic" 
                    label="Salary" 
                    value={salary} 
                    type="number"
                    name="salary"
                    onChange={handleInputChange}
                />
                <br/>
                <Button
                    variant="contained" 
                    color="primary" 
                    type="submit"
                    style={{width:"100px", marginBottom:3}}
                >Submit
                </Button>
            </form>
        </div>
    )
}
