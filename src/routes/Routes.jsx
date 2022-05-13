import { Routes, Route } from "react-router-dom";
import { Landing, Home } from "../pages/"

const NavRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/home" element={<Home />} />
        </Routes>
    )
}

export { NavRoutes }