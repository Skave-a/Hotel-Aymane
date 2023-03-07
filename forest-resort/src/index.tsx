import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { RoomProvider } from "./context";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  // <React.StrictMode>
  <RoomProvider>
    <App />
  </RoomProvider>
  // </React.StrictMode>
);

reportWebVitals();
