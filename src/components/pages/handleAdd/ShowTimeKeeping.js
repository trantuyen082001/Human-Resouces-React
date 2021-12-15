import "./showTimeKeeping.css";
import React, {useState, useEffect} from "react";
import TextField from '@mui/material/TextField';
import { makeStyles } from '@mui/styles';
import { Button } from "@mui/material";
import {useHistory, useParams} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {getSignleUser, updateUser } from "../../reduxSalary/action";

export default function ShowTimeKeeping() {

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
         dayMonthYear: "",
         Monday: "",
         Tuesday: "",
         Wednesday: "",
         Thursday: "",
         Friday: "",
         Saturday: "",
         Sunday: ""
     });

     const {dayMonthYear, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday} = state;

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
        if(!dayMonthYear || !Monday || !Tuesday || !Wednesday || !Thursday || !Friday || !Saturday || !Sunday) {
            setError("Please fill out all forms!");
        } else {
            dispatch(updateUser(state,id));
            history.push("/salary");
            setError("");
        }
    };


    return (
        <div className="showTimeKeeping">
             <Button
                    variant="contained"
                    color="primary"
                    style={{width:"100px", margin:3}}
                    onClick={() => history.push("/salary")}
                >
                    <box-icon name='arrow-back' color='#e8e2e2' ></box-icon>
            </Button>
            <h2>TimeKeeping</h2>
            {error && <h3 style={{color:"red"}}>{error}</h3>}
            <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
            <TextField
                    helperText="Please enter Day-Month-Year"
                    id="demo-helper-text-aligned"
                    label="Day-Month-Year"
                    className="title"
                    value={dayMonthYear || ""}
                    name='dayMonthYear' 
                    type="text"
                    onChange={handleInputChange}
            />
            <br/>
            <TextField 
                    style={{margin:5}}
                    label="Monday" 
                    variant="filled" 
                    color="success" 
                    focused
                    className="title"
                    value={Monday || ""}
                    name='Monday' 
                    type="text"
                    onChange={handleInputChange}
            />
            <TextField
                    style={{margin:5}}
                    label="Tuesday" 
                    variant="filled" 
                    color="success" 
                    focused
                    className="title"
                    value={Tuesday || ""}
                    name='Tuesday' 
                    type="text"
                    onChange={handleInputChange}
            />
            <br/>
            <TextField 
                    style={{margin:5}}
                    label="Wednesday" 
                    variant="filled" 
                    color="success" 
                    focused
                    className="title"
                    value={Wednesday || ""}
                    name='Wednesday' 
                    type="text"
                    onChange={handleInputChange}
            />
            <TextField 
                    style={{margin:5}}
                    label="Thursday" 
                    variant="filled" 
                    color="success" 
                    focused
                    className="title"
                    value={Thursday || ""}
                    name='Thursday' 
                    type="text"
                    onChange={handleInputChange}
            />
            <br/>
            <TextField 
                    style={{margin:5}}
                    label="Friday" 
                    variant="filled" 
                    color="success" 
                    focused
                    className="title"
                    value={Friday || ""}
                    name='Friday' 
                    type="text"
                    onChange={handleInputChange}
            />
            <TextField 
                    style={{margin:5}}
                    label="Saturday" 
                    variant="filled" 
                    color="success" 
                    focused
                    className="title"
                    value={Saturday || ""}
                    name='Saturday' 
                    type="text"
                    onChange={handleInputChange}
            />
            <br/>
            <TextField 
                    style={{margin:5}}
                    label="Sunday" 
                    variant="filled" 
                    color="success" 
                    focused
                    className="title"
                    value={Sunday || ""}
                    name='Sunday' 
                    type="text"
                    onChange={handleInputChange}
            />
            <br/>
            <Button
                    style={{margin:4}}
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
