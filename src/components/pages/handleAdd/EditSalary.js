import "./editSalary.css"
import React, {useState, useEffect} from "react";
import TextField from '@mui/material/TextField';
import { makeStyles } from '@mui/styles';
import { Button } from "@mui/material";
import {useHistory, useParams} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {getSignleUser, updateUser } from "../../reduxSalary/action";


export default function EditSalary() {

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
         age: "",
         coSalary: "",
         salary: ""
     });

     const {fullName, email, gender, age, coSalary, salary} = state;

     const [error, setError] = useState("");
     const dispatch = useDispatch();
     const history = useHistory();
     const {id} = useParams();
     const {user} = useSelector(state => state.data);

     const handleInputChange = (e) => {
         let {name, value} = e.target;
         setState({...state, [name]:value});
     };

     useEffect(() => {
         dispatch(getSignleUser(id))
     }, []);

     useEffect(() => {
         if(user) {
             setState({...user});
         }
     }, [user]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!id || !fullName || !email || !gender || !age || !coSalary || !salary) {
            setError("Please fill out all forms");
        } else {
            dispatch(updateUser(state,id));
            history.push("/salary");
            setError("");
        }
    };

    return (
        <div className="editSalary">
            <Button
                    variant="contained"
                    color="primary"
                    style={{width:"100px", margin:3}}
                    onClick={() => history.push("/salary")}
                >
                    <box-icon name='arrow-back' color='#e8e2e2' ></box-icon>
            </Button>
            <h2>Edit User</h2>
            {error && <h3 style={{color:"red"}}>{error}</h3>}
            <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}> 
                {/* <TextField
                     style={{marginBottom:10}}
                     id="outlined-basic"
                     label="Enter ID" 
                     value={id || ""} 
                     type="text"
                     name = "id"
                     onChange={handleInputChange}
                />
                <br/> */}
                <TextField
                     style={{marginBottom:10}}
                     id="outlined-basic"
                     label="Enter Full Name" 
                     value={fullName || ""} 
                     type="text"
                     name = "fullName"
                     onChange={handleInputChange}
                />
                <br/>
                <TextField
                    style={{marginBottom:10}} 
                    id="outlined-basic" 
                    label="Enter Email" 
                    value={email || ""} 
                    type="email"
                    name= "email"
                    onChange={handleInputChange}
                />
                <br/>
                <TextField 
                    style={{marginBottom:10}} 
                    id="outlined-basic" 
                    label="gender" 
                    value={gender || ""} 
                    type="text"
                    name= "gender"
                    onChange={handleInputChange}
                />
                <br/>
                <TextField 
                    tyle={{marginBottom:10}} 
                    id="outlined-basic" 
                    label="Age" 
                    value={age || ""} 
                    type="number"
                    name="age"
                    onChange={handleInputChange}
                />
                <br/>
                <TextField 
                    style={{marginTop:10, marginBottom:10}} 
                    id="outlined-basic" 
                    label="Coefficients salary" 
                    value={coSalary || ""} 
                    type="text"
                    name="coSalary"
                    onChange={handleInputChange}
                />
                <br/>
                <TextField 
                    style={{marginBottom:10}} 
                    id="outlined-basic" 
                    label="Salary" 
                    value={salary || ""} 
                    type="text"
                    name="salary"
                    onChange={handleInputChange}
                />
                <br/>
                <Button
                    variant="contained" 
                    color="primary" 
                    type="submit"
                    style={{width:"100px", marginBottom:3}}
                >
                    Update
                </Button>
            </form>
        </div>
    )
}
