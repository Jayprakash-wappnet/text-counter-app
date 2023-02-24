import './App.css';
import Nav from './components/Nav';
import TextArea from './components/TextArea';
function App() {
  return (
    <div className="App">
      <Nav title="Text counter" home="Home" />       {/* if you not pass any props the it show default props */}
      <div className='container'>
      <TextArea heading="Enter Your Text Here..."/>
      </div>
    </div>
  );
}

export default App;
