import React, { useEffect } from 'react';
import { Route, BrowserRouter as Router, Routes, useNavigate } from 'react-router-dom';


const Protected = (props) => {
    const{Component}= props;
    const navigate = useNavigate();
    useEffect(() => {
        let Login = localStorage.getItem('/');
        if (!Login){
            navigate('/')
        }
    });
  return (
    <div>
        <Component/>
    </div>
    
  );
};

export default Protected;
