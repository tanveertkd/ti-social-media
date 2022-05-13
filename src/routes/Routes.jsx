import { Routes, Route } from "react-router-dom";
import { Landing, Home, PostComment } from "../pages/"

const NavRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/home" element={<Home />} />
            <Route path="/post" element={<PostComment />} />
        </Routes>
    )
}

export { NavRoutes }