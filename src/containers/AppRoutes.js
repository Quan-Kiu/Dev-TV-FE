import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import AdminLayout from '../components/Layout/AdminLayout';
import DefaultLayout from '../components/Layout/DefaultLayout';
import { updateWindowSize } from '../redux/app/action';

const AppRoutes = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const handleResize = () => {
            dispatch(updateWindowSize(window.innerWidth));
        };

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, [dispatch]);
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />} />
            <Route path="/admin" element={<AdminLayout />} />
        </Routes>
    );
};

export default AppRoutes;
