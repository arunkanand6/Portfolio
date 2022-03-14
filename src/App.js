import "./App.css";
import AppRouter from "./Router/AppRouter";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.title = "Arun Kumar M";
  }, []);
  return (
    <div>
      <AppRouter />
    </div>
  );
}

export default App;
