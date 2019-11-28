import React, { useState } from "react";
import Header from './Header/Header';
import Main from './Main/Main';
const Layout = props => {
    const [time, setTime] = useState(5);
    const setTimer = (time) => {
        console.log(time);
        setTime(time);
    };
    return (
        <>
         <Header setTime={setTimer} />
         <Main time={time} />
        </>
    )
};

export default Layout;