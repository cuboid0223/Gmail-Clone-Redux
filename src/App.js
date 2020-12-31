import React from "react";
import "./scss/all.css";
import { useSelector } from "react-redux";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Mail from "./components/Mail";
import EmailList from "./components/EmailList";
import SendMail from "./components/SendMail";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {selectSendMessageIsOpen} from './features/mailSlice';
function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen); // 顯示 sendMessageIsOpen 當前的狀態
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="app__body">
          <Sidebar />
          <Switch>
            <Route path="/mail">
              <Mail />
            </Route>
            <Route path="/">
              <EmailList />
            </Route>
          </Switch>
        </div>
        {sendMessageIsOpen && <SendMail />}
      </div>
    </Router>
  );
}

export default App;
