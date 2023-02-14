import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <main className="w-[80%] xl:w-[60%] flex flex-col items-center mx-auto">
    <App />
  </main>
);
