import React from "react";
import ReactDOM from "react-dom";
import { UserList } from "./components/UserList.jsx";
import './styles/styles.scss';

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(React.createElement(UserList, null, null));
