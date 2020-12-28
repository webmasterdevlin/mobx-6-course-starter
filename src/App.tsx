import React from "react";
import { BrowserRouter } from "react-router-dom";

import Routes from "./routes";
import HeaderNav from "components/HeaderNav";

const App = () => (
    <BrowserRouter>
      <>
        <HeaderNav />
        <div className="container">
          <div className="vertical-center">
            <Routes />
          </div>
        </div>
      </>
    </BrowserRouter>
);

export default App;
