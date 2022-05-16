import { Toaster } from "react-hot-toast";
import "./App.css";
import { NavRoutes } from "./routes/Routes";

function App() {
  return (
    <div className="App primary-bg w-screen h-screen overflow-x-hidden">
      <Toaster />
      <NavRoutes />
    </div>
  );
}

export default App;
