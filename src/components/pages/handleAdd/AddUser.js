import "./addUser.css"
import React, {useState} from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import validator from "validator";
import { makeStyles } from '@mui/styles';
import { Button } from "@mui/material";
import {useHistory} from 'react-router-dom';
import {useDispatch} from "react-redux";
import { addUser } from "../../redux/action";



export default function AddUser() {

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
         Gender: "",
         Age: "",
         position: "",
         Status: ""
     });

     const {fullName, email, Gender, Age, position, Status} = state;

     const [error, setError] = useState("");
     const dispatch = useDispatch();
     const history = useHistory();

     const handleInputChange = (e) => {
         let {name, value} = e.target;
         setState({...state, [name]:value});
     };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!fullName || !email || !Gender || !Age || !position || !Status) {
            setError("Please enter all information!");
        } else {
            if(validator.isEmail(email)) {
                dispatch(addUser(state));
                history.push("/documents");
                setError("");
            } else {
                setError("Enter valid Email")
            }
        }
    };

    return (

        <div className="addUser">
            <Button
                    variant="contained"
                    color="primary"
                    style={{width:"100px", margin:3}}
                    onClick={() => history.push("/documents")}
                >
                    <box-icon name='arrow-back' color='#e8e2e2' ></box-icon>
            </Button>
            <h2>Add User</h2>
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
                    value={Gender} 
                    type="text"
                    name= "Gender"
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
                    label="Position" 
                    value={position} 
                    type="text"
                    name="position"
                    onChange={handleInputChange}
                />
                <br/>
                <TextField 
                    style={{marginBottom:3}} 
                    id="outlined-basic" 
                    label="Status" 
                    value={Status} 
                    type="text"
                    name="Status"
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
