import React from "react"; // import React form react module
import ReactDOM from "react-dom/client"; // import ReactDOM to be able to render components and elements on the web
import App from "./App"; // import App component

const root = ReactDOM.createRoot(document.getElementById("root")); // get root element form index.html
root.render( // put into root element the following elements
    <React.StrictMode> {/* highlight potential bugs */}
        <App /> {/* create App component */}
    </React.StrictMode>
);
