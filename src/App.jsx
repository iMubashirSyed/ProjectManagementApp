import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import TaskListNumbers from "./components/other/TaskListNumbers";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { setLocalStorage } from "./utils/LocalStorage";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setuser] = useState("");
  const [loggedInUserData, setloggedInUserData] = useState(null);
  const Authdata = useContext(AuthContext);
  console.log(Authdata);


  useEffect(()=>{
    const loggedInUser = localStorage.getItem("loggedInUserData")

    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser)
      setuser(userData.role)
      setloggedInUserData(userData.data)
    }
  },[])

  const handleLogin = (email, password) => {
    if (email == "admin@me.com" && password == 123) {
      setuser("admin");
      localStorage.setItem("loggedInUserData", JSON.stringify({ role: "admin" }));
    } else if (Authdata) {
      const employee = Authdata.employees.find(
        (e) => email == e.email && password == e.password
      );
      if (employee) {
        setuser("employee");
        setloggedInUserData(employee)
        localStorage.setItem(
          "loggedInUserData",
          JSON.stringify({ role: "employee", data:employee })
        );
      }
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user == "admin" ? <AdminDashboard /> : (user == "employee" ? <EmployeeDashboard data={loggedInUserData} /> : null)}
    </>
  );
};

export default App;
