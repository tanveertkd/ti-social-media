import { useSelector } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Landing, Home, PostComment, Profile } from '../pages/';
import { PrivateRoutes } from './PrivateRoutes';

const NavRoutes = () => {
    const { token } = useSelector((state) => state.auth);

    return (
        <Routes>
            <Route element={<PrivateRoutes />}>
                <Route path="/home" element={<Home />} />
                <Route path="/post" element={<PostComment />} />
                <Route path="/profile" element={<Profile />} />
            </Route>

            {!token ? (
                <>
                    <Route path="/" element={<Landing />} />
                </>
            ) : (
                <>
                    <Route path="/" element={<Navigate to="/home" />} />
                </>
            )}
        </Routes>
    );
};

export { NavRoutes };
