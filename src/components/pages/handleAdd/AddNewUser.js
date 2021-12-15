import "./addNewUser.css";
import React, {useState} from "react";
import validator from "validator";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { makeStyles } from '@mui/styles';
import { Button } from "@mui/material";
import {useHistory} from 'react-router-dom';
import {useDispatch} from "react-redux";
import { addUser } from "../../reduxNew/action";

export default function AddNewUser() {

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
         fullName: "",
         email: "",
         gender: "",
         Age: "",
         level: "",
         status: ""
     });

     const {fullName, email, gender, Age, level, status} = state;

     const [error, setError] = useState("");
     const dispatch = useDispatch();
     const history = useHistory();

     const handleInputChange = (e) => {
         let {name, value} = e.target;
         setState({...state, [name]:value});
     };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!fullName || !email || !gender || !Age || !level || !status) {
            setError("Please enter all informations?");
        } else {
            if(validator.isEmail(email)) {
                dispatch(addUser(state));
                history.push("/recruitment");
                setError("");
            } else {
                setError("Enter valid Email")
            }
        }
    };

    return (
        <div className="addNewUser">
             <Button
                    variant="contained"
                    color="primary"
                    style={{width:"100px", margin:3}}
                    onClick={() => history.push("/recruitment")}
                >
                    <box-icon name='arrow-back' color='#e8e2e2' ></box-icon>
            </Button>
            <h2>Add New User</h2>
            {error && <h3 style={{color:"red"}}>{error}</h3>}
            <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}> 
                <TextField
                     style={{marginBottom:3}}
                     id="outlined-basic"
                     label="Enter Full Name" 
                     value={fullName} 
                     type="text"
                     name = "fullName"
                     onChange={handleInputChange}
                />
                <br/>
                <TextField
                    style={{marginBottom:3}} 
                    id="outlined-basic" 
                    label="Enter Email" 
                    value={email} 
                    type="email"
                    name= "email"
                    onChange={handleInputChange}
                />
                <br/>
                <TextField 
                    style={{marginBottom:3}} 
                    id="outlined-basic" 
                    label="Gender" 
                    value={gender} 
                    type="text"
                    name= "gender"
                    onChange={handleInputChange}
                />
                <br/>
                <TextField 
                    tyle={{marginBottom:3}} 
                    id="outlined-basic" 
                    label="Age" 
                    value={Age} 
                    type="number"
                    name="Age"
                    onChange={handleInputChange}
                />
                <br/>
                <TextField 
                    style={{marginBottom:3}} 
                    id="outlined-basic" 
                    label="Qualification" 
                    value={level} 
                    type="text"
                    name="level"
                    onChange={handleInputChange}
                />
                <br/>
                <TextField 
                    style={{marginBottom:3}} 
                    id="outlined-basic" 
                    label="Status" 
                    value={status} 
                    type="text"
                    name="status"
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
