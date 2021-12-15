import Slidebar from "./components/slidebar/Slidebar";
import Topbar from "./components/Topbar/Topbar";
import "./App.css"
import Home from "./components/pages/home/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import store from "./components/redux/store"
import { Provider } from "react-redux";
import DocumentList from "./components/pages/documentList/DocumentList";
import AddUser from "./components/pages/handleAdd/AddUser";
import AddNewUser from "./components/pages/handleAdd/AddNewUser";
import EditUser from "./components/pages/handleAdd/EditUser";
import EditNewUser from "./components/pages/handleAdd/EditNewUser";
import Recruitment from "./components/pages/recruiment/Recruitment";
import Salary from "./components/pages/salary/Salary";
import AddUserSalary from "./components/pages/handleAdd/AddUserSalary";
import EditSalary from "./components/pages/handleAdd/EditSalary";
import ShowTimeKeeping from "./components/pages/handleAdd/ShowTimeKeeping";
import Login from "./components/pages/login/Login";
import Register from "./components/pages/register/register";
import { useState } from "react";



function App() {

  const [user, setLoginUser] = useState({});

  return (
    <Router>
      <Topbar/>
      <div className="container">
        <Slidebar/>
        <Switch>
             <Route exact path="/">
               {
                 user && user._id ?  <Home setLoginUser={setLoginUser}/> : <Login setLoginUser={setLoginUser} />
               }
              </Route>
            {/* Document */}
              <Route path="/documents">
                <Provider store={store}>
                   <DocumentList/>
                </Provider>
              </Route>
              <Route  path="/addUser" component={AddUser}/>
              <Route  path="/editUser/:id" component={EditUser}/>
              {/* Recruitment */}
              <Route path="/recruitment">
                <Provider store={store}>
                   <Recruitment/>
                </Provider>
              </Route>
              <Route  path="/addNewUser" component={AddNewUser}/>
              <Route  path="/editNewUser/:id" component={EditNewUser}/>
              {/* Salary */}
              <Route path="/salary">
                <Provider store={store}>
                   <Salary/>
                </Provider>
              </Route>
              <Route  path="/addNewUserSalary" component={AddUserSalary}/>
              <Route  path="/editSalary/:id" component={EditSalary}/>
              <Route  path="/showTimeKeeping/:id" component={ShowTimeKeeping}/>
              {/*  */}
              <Route path="/login">
                <Login setLoginUser={setLoginUser}/>
              </Route>
              <Route  path="/register" component={Register}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
