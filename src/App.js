import "./App.css";
import SignUp from "./Components/Pages/GetStarted/SignUp/SignUp";
import LandingPage from "./Components/Pages/LandingPage/LandingPage";
import NavBar from "./Components/Pages/NavBar/NavBar";
import Login from "./Components/Pages/GetStarted/Login/Login";
import Register from "./Register/Register";
import CreateProduct from "./CreateProduct/CreateProduct";
import DashBoard from "./Components/Pages/UserProfile/DashBoard/DashBoard";
function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <Login /> */}
      {/* <Register /> */}
      {/* <CreateProduct /> */}
      <DashBoard />
    </div>
  );
}

export default App;
