import React from 'react'
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

import AdminLayout from './Layout/AdminLayout'
import AuthLayout from './Layout/AuthLayout';
import Documentation from './Tuning/Pages/Documentation/Documentation';

const App = () => {

  const themeMode = useSelector((state) => state.themeMode.themeMode);
  const themeColor = useSelector((state) => state.theme.themeColor);
  const borderStroke = useSelector((state) => state.stroke.borderStroke);
  const boxLayout = useSelector((state) => state.boxLayout.boxLayout);
  const monochrome = useSelector((state) => state.monochrome.monochrome);
  const borderRadius = useSelector((state) => state.borderRadius.borderRadius);
  const iconColor = useSelector((state) => state.iconColor.iconColor);
  const gradientColor = useSelector((state) => state.gradientColor.gradientColor);
 
   let selector = useSelector((state) => state)
   console.log({selector})
  console.log({iconColor})

  const location = useLocation();
  const pathname = location.pathname;

  const authTitleMapping = {
    "/signin": "Signin",
    "/signup": "Signup",
    "/password-reset": "PasswordReset",
    "/two-step": "TwoStep",
    "/lockscreen": "Lockscreen",
    "/maintenance": "Maintenance",
    "/404": "NoPage",
  };

  const isAuthRoute = authTitleMapping[pathname];

  return (
    <>
      {isAuthRoute ? (
        <AuthLayout />
      ) : pathname.startsWith('/docs') ? (
        <Documentation />
      ) : (
        <AdminLayout 
          themeMode={themeMode}
          themeColor={themeColor} 
          borderStroke={borderStroke} 
          boxLayout={boxLayout} 
          monochrome={monochrome}
          borderRadius={borderRadius}
          iconColor={iconColor}
          gradientColor={gradientColor}
        />
      )}
    </>
  )
}

export default App