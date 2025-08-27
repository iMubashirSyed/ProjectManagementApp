import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { setLocalStorage } from "./utils/LocalStorage";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setuser] = useState("");
  const [loggedInUserData, setloggedInUserData] = useState(null);
  const [userData, setUserData] = useContext(AuthContext);
  // console.log(Authdata);


  useEffect(()=>{
    // setLocalStorage()
    const loggedInUser = localStorage.getItem("loggedInUserData")

    if (loggedInUser) {
      const UserData = JSON.parse(loggedInUser)
      setuser(UserData.role)
      setloggedInUserData(UserData.data)
    }
  },[])

  const handleLogin = (email, password) => {
    if (email == "admin@example.com" && password == "123") {
      setuser("admin");
      localStorage.setItem("loggedInUserData", JSON.stringify({ role: "admin" }));
    } else if (userData) {
      const employee = userData.find(
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
    } 
    else {
      alert("Invalid Credentials");
    }
  };

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user == "admin" ? <AdminDashboard changeUser={setuser}/> : (user == "employee" ? <EmployeeDashboard changeUser={setuser} data={loggedInUserData} /> : null)}
    </>
  );
};

export default App;
