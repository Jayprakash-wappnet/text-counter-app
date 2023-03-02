import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Nav from "./components/Nav";
import TextArea from "./components/TextArea";
import Alert from "./components/Alert";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#254574";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };
  
  return (
    <>
      
        {/* if you not pass any props the it show default props */}
        <div className="container">
         <BrowserRouter>
         <Nav
          title="Text Counter"
          home="Home"
          mode={mode}
          toggleMode={toggleMode}
        />{" "}
        <Alert alert={alert} />
           <Routes>
            <Route exact path="/" element={ <TextArea
                heading="Enter Your Text Here..."
                mode={mode}
                showAlert={showAlert}
              />} >
            </Route>
            <Route path="/about" element={<About/>}></Route>
           </Routes>
         </BrowserRouter>
         
      </div>
      </>
  );
}

export default App;
