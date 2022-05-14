import { Routes, Route } from "react-router-dom";
import { Landing, Home, PostComment, Profile } from "../pages/"

const NavRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/home" element={<Home />} />
            <Route path="/post" element={<PostComment />} />
            <Route path="/profile" element={<Profile />} />
        </Routes>
    )
}

export { NavRoutes }