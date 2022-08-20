// import logo from './logo.svg';
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Subnav from "./components/sub-nav/Subnav";
import User from "./components/user/User";
import Content from "./pages/content/Content";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Subnav />
      <div className="app__container">
        <User />
        <Content />
      </div>
    </div>
  );
}

export default App;
