import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes, useNavigate } from 'react-router-dom';
import AdminLayout from '../components/Layout/AdminLayout';
import DefaultLayout from '../components/Layout/DefaultLayout';
import { setAppLoading, updateWindowSize } from '../redux/app/action';
import Loader from '../components/Common/Loader';

const AppRoutes = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {appLoading} = useSelector(({ app }) => app);
    useEffect(() => {
        const handleResize = () => {
            dispatch(updateWindowSize(window.innerWidth));
        };

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, [dispatch]);

    useEffect(() => {
        if(appLoading){

            let secondsToGo = appLoading?.duration;
            const timer = setInterval(() => {
                secondsToGo -= 1;
            }, 1000);
            const timeOut = setTimeout(() => {
                clearInterval(timer);
                navigate(appLoading?.path);
                dispatch(setAppLoading(null));
            }, secondsToGo * 1000);
            
            return () => 
            {
                clearTimeout(timeOut);
            }
        }
    },[appLoading, dispatch])


    return (
        <>
        {appLoading && <Loader/>} 
        <Routes>
            <Route path="*" element={<DefaultLayout/>}/>
            <Route path="*" element={<AdminLayout />} />
        </Routes>
        </>
    );
};

export default AppRoutes;
