
import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate, useNavigate } from "react-router-dom";
import './App.css'

import "assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/scss/argon-dashboard-react.scss";

import AdminLayout from "layouts/Admin.js";
import Operator from "layouts/Operator";
import AuthLayout from "layouts/Auth.js";
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import DesignTemplate from "views/DesignTemplate";
import DataProvider from "store/DataProvider";
//Import Register Licence from syncfusion
import { registerLicense } from '@syncfusion/ej2-base';

// Import Syncfusion CSS
import '@syncfusion/ej2-base/styles/material.css';
import '@syncfusion/ej2-react-grids/styles/material.css';
import '../node_modules/@syncfusion/ej2-base/styles/material.css';
import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
import '../node_modules/@syncfusion/ej2-calendars/styles/material.css';
import '../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';
import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
import '../node_modules/@syncfusion/ej2-navigations/styles/material.css';
import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
import '../node_modules/@syncfusion/ej2-notifications/styles/material.css';
import "../node_modules/@syncfusion/ej2-react-grids/styles/material.css";
import App from "App";



registerLicense('Ngo9BigBOggjHTQxAR8/V1NCaF5cXmZCeUx0TXxbf1x0ZFFMYFpbQXNPMyBoS35RckVlW3dedHRdQ2FaWUF2');


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <DataProvider>
      <App />
      <ToastContainer />
    </DataProvider>
  </BrowserRouter>
);
