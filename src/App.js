import logo from "./logo.svg";
import User from "./user";
import "./App.css";

function App() {
  return (
    <div className='App'>
      {/* <h1>App Commponents </h1> */}
      <User data={{ name: "nouman", age: "26" }} />
    </div>
  );
}

export default App;
