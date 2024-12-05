/* eslint-disable react/prop-types */
import { createContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
export const contextApp = createContext();

export const AppProvider = ({ children }) => {
  const jsonData = JSON.parse(localStorage.getItem("users")) || [];
  const navigate = useNavigate();
  const email = useRef()
  const pass = useRef()

  const [flag, setFlag] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    createPassword: "",
    confirmPassword: "",
  });
  const [validData, setValidData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState({
    email: "",
    pass: "",
  });

  const checkInLocalStorage = {
    emailFound: jsonData.find((user) => user.email === formData.email),
    useNameFound: jsonData.find((user) => user.username === formData.username)
  }

  //Validating email and username if its already Exists
  function handleClick(e) {
    e.preventDefault();
    const { createPassword, confirmPassword } = formData;
    if (createPassword !== confirmPassword || createPassword === "") {
      alert("Passwords do not match");
    } else if (checkInLocalStorage.emailFound) {
      alert('Email Already Exists')
    } else if (checkInLocalStorage.useNameFound) {
      alert("UserName already Exists")
    }
    else {
      const newUser = { ...formData, id: new Date().getTime() };
      jsonData.push(newUser);
      localStorage.setItem("users", JSON.stringify(jsonData));
      setFormData(e.target.value = '')
      navigate("/login");
      console.log(newUser);
    }
  }

  // inserting data into local storage
  function handleInputSignup(e) {
    const useData = (prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    });
    setFormData(useData);
  }

  const handleInputLogin = (e) => {
    setValidData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };


  // comparing register data with loginData using localstorage
  const handleValidation = (e) => {
    e.preventDefault();

    const userFound = jsonData.find(
      (user) => user.email === validData.email || user.username === validData.email
    );

    if (!userFound) {
      setError((prev) => ({ ...prev, email: "Email/username do not match" }));
      return;
    } else if (userFound.createPassword !== validData.password) {
      setError((prev) => ({ ...prev, pass: "Password does not match" }));
      return;
    } else {
      navigate("/");
      setFlag(true);
    }

    setValidData({
      email: "",
      password: "",
    });
  };

  // updating local storage
  function handleUpdateBtn(e) {
    const checkInLocalStorage = {
      emailFound: jsonData.find((user) => user.email === email.current.value),
      passFound: jsonData.find((user) => user.confirmPassword === pass.current.value),
    }
    e.preventDefault()
    if (!checkInLocalStorage.emailFound) {
      console.log(email.current.value);
      console.log("Not found email");
      return;
    } else if (checkInLocalStorage.passFound) {
      alert("Password already Exists")
    }
    else {
      const passwordEdit = jsonData.find((user) => user.email === email.current.value);
      passwordEdit.confirmPassword = pass.current.value;
      passwordEdit.createPassword = pass.current.value;
      localStorage.setItem('users', JSON.stringify(jsonData))
      console.log("Email Found");
      console.log("Updated");
      console.log(jsonData);
      return;
    }
  }


  const value = {
    setFormData,
    handleClick,
    handleInputSignup,
    navigate,
    setFlag,
    handleUpdateBtn,
    handleValidation,
    handleInputLogin,
    formData,
    validData,
    error,
    flag,
    email,
    pass,
    jsonData,
  };

  return <contextApp.Provider value={value}>{children}</contextApp.Provider>;
};
