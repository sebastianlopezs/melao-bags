import React from "react";
import ReactDOM from "react-dom/client";
import Layout from "./layout.jsx";
import "./css/app.css"

function App() {

    return (
        <React.StrictMode>
            {/* <I18nextProvider i18n={i18next}> */}
                <Layout />
            {/* </I18nextProvider> */}
        </React.StrictMode>
    );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
