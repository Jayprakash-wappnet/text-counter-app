import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Nav from "./components/Nav";
import TextArea from "./components/TextArea";
import Alert from "./components/Alert";
function App() {
  const [mode, setMode] = useState("light");
  const [alert,setAlert] = useState(null);
  const showAlert = (message,type) => {
     setAlert({ 
      message : message ,
      type : type
    })
  }
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#254574";
      showAlert("Dark mode has been enabled","Success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled","Success");

    }
  };
  return (
    <div className="App">

      <Nav
        title="Text Counter"
        home="Home"
        mode={mode}
        toggleMode={toggleMode}
      />{" "}
      <Alert  alert = {alert}/>
      {/* if you not pass any props the it show default props */}
      <div className="container">
        <TextArea heading="Enter Your Text Here..." mode={mode} />
      </div>
      <About />
    </div>
  );
}

export default App;
