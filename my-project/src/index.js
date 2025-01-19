import React from "react";
import ReactDOM from "react-dom";
import "./index.css"; // Optional: If you have custom CSS
import App from "./App.jsx"; // Import the App.jsx component
import Main from "./Main.jsx"; // Import the Main.jsx component

// Renders the Main component into the root div in index.html
ReactDOM.render(
  <React.StrictMode>
    <App /> {/* If you want to render the App component */}
    {/* <Main />  Uncomment if you want to render the Main component instead */}
  </React.StrictMode>,
  document.getElementById("root")
);
