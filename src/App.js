import "./App.css";
import { Landing } from "./pages/";
import { NavRoutes } from "./routes/Routes";

function App() {
  return (
    <div className="App primary-bg w-screen h-screen">
      {/* <Landing /> */}
      <NavRoutes />
    </div>
  );
}

export default App;
