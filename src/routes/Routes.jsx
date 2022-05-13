import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/"

const NavRoutes = () => {
    return(
        <Routes>
            <Route path="/home" element={<Home />}/>
        </Routes>
    )
}

export { NavRoutes }