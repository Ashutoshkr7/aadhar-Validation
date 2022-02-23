// import logo from "./logo.svg";
import "./App.css";
import Login from "./Component/Login";
import RegisterAadhar from "./Component/RegisterAadhar";
import SuccessLogin from "./Component/SuccessLogin";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/register" component={RegisterAadhar} />
        <Route exact path="/success" component={SuccessLogin} />
      </Switch>
      {/* <Login />
      <RegisterAadhar />
      <SuccessLogin /> */}
    </>
  );
}

export default App;
