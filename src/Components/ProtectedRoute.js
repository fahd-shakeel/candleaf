// import React from 'react'
// import { useCookies } from 'react-cookie';
// import {useNavigate} from "react-router-dom"
// import { useEffect, useState } from 'react';
// import Login from './Login';

// const ProtectedRoute = (props) => {
//     // const [token, setToken] = useState("");
//     const navigate = useNavigate();
//     const [cookies, setCookie, removeCookie] = useCookies(['token']);
//     const [isLoggedIn, setLoggedIn] = useState(false);
    
//     const token = cookies.token;

//     useEffect(()=>{
//         if(!token || token==='undefined'){
//             setLoggedIn(false)
//             return navigate('/login')
//         }
//         setLoggedIn(true)
//     },[isLoggedIn])

    
//     return (
//         <React.Fragment>
//             {isLoggedIn ? props.children : <Login/>}
//         </React.Fragment>
//     )
// }

// export default ProtectedRoute

import React, { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    const [cookies] = useCookies(['token']);
    const navigate = useNavigate();
    const token = cookies.token;

    useEffect(() => {
        if (!token || token === 'undefined') {
            navigate('/login');
        }
    }, [token, navigate]);

    // Render children if token exists
    return token ? <>{children}</> : null;
};

export default ProtectedRoute;
