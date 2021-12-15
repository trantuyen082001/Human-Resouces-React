import "./salary.css";
import React, {useEffect} from "react";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {useDispatch, useSelector} from "react-redux"; 
import { deleteUser, loadUsers } from "../../reduxSalary/action";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { makeStyles } from '@mui/styles';
import {useHistory} from "react-router-dom";
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';

export default function Salary() {

    const useButtonStyles = makeStyles((them) => ({
        root: {
          display: 'flex',
          flexDirection: 'colunm',
          alignItem: 'center',
          '& > *': {
            m:1,
          },
        },
      }));
    
      const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
          backgroundColor: theme.palette.common.black,
          color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
          fontSize: 14,
        },
      }));
      
      const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
          backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
          border: 0,
        },
      }));
      
    
        let dispatch = useDispatch();
    
        const { users } = useSelector(state => state.data);
    
        useEffect(() => {
          dispatch(loadUsers());
        }, []);
    
        const buttonStyles = useButtonStyles();
    
        const handleDelete = (id) => {
          if(window.confirm("Are you sure you want to delete the User?")) {
            dispatch(deleteUser(id));
          }
        }
    
        let history = useHistory();

    return (
        <div className="salary">
            <div className={buttonStyles.root}>
            <Button 
                variant="contained" 
                endIcon={<PersonAddAlt1Icon />}
                style={{padding:'5px', fontSize:'12px'}}
                onClick={() => history.push("/addNewUserSalary")}>
             Add User
            </Button>
    </div>

   <TableContainer component={Paper}>
      <Table sx={{ minWidth: 900, marginTop:1,}} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell className="tableTitle">ID</StyledTableCell>
            <StyledTableCell className="tableTitle">Full Name</StyledTableCell>
            <StyledTableCell align="left">Email</StyledTableCell>
            <StyledTableCell align="left">Gender</StyledTableCell>
            <StyledTableCell align="left">Age</StyledTableCell>
            <StyledTableCell align="left">Coefficients Salary</StyledTableCell>
            <StyledTableCell align="left">Salary</StyledTableCell>
            <StyledTableCell align="left">Timekeeping</StyledTableCell>
            <StyledTableCell align="left">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users && users.map((user) => (
            <StyledTableRow key={user.id}>
              <StyledTableCell component="th" scope="row">{user.id}</StyledTableCell>
              <StyledTableCell component="th" scope="row">{user.fullName}</StyledTableCell>
              <StyledTableCell align="left">{user.email}</StyledTableCell>
              <StyledTableCell align="left">{user.gender}</StyledTableCell>
              <StyledTableCell align="left">{user.age}</StyledTableCell>
              <StyledTableCell align="center">{user.coSalary}</StyledTableCell>
              <StyledTableCell align="center">{user.salary}</StyledTableCell>
              <StyledTableCell align="left">
                <div className={buttonStyles.root}>
                  <Button 
                      variant="outlined" 
                      startIcon={<RemoveRedEyeIcon />}
                      onClick={() => history.push(`/showTimeKeeping/${user.id}`)}
                  >Show
                  </Button>
                </div>
              </StyledTableCell>
              <StyledTableCell align="left">
                <div className={buttonStyles.root}>
                    <ButtonGroup variant="contained" aria-label="outlined primary button group">
                        <Button 
                            style={{marginRight:"5px"}}
                            color="primary"
                            onClick={() => history.push(`/editSalary/${user.id}`)}
                        >Edit
                        </Button>
                        <Button 
                            variant="outlined" 
                            startIcon={<DeleteIcon />}
                            onClick={() => handleDelete(user.id)}>
                              Delete
                        </Button>
                    </ButtonGroup>
                </div>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
  </TableContainer>
        </div>
    )
}
