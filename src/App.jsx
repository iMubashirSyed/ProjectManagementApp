import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import TaskListNumbers from "./components/other/TaskListNumbers";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { setLocalStorage } from "./utils/LocalStorage";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setuser] = useState("");

  const handleLogin = (email, password) => {
    if (email == "admin@me.com" && password == 123) {
      setuser("admin");
    } else if (Authdata && Authdata.employees.find((e)=>email == e.email && password == e.password)) {
      setuser("employee");
    } else {
      alert("Invalid Credentials");
    }
  };

  // useEffect(() => {
  //   setLocalStorage()
  // }, )

  const Authdata = useContext(AuthContext)
  console.log(Authdata)

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user == "admin" ? <AdminDashboard /> : <EmployeeDashboard />}
    </>
    // <AdminDashboard />
  );
};

export default App;
