import React from "react";
import Card from "../common/Card";

const withFunction = (Component) => (props) => {
    const isAuth = localStorage.getItem("auth") !== null;
    const onLogin = () => {
        localStorage.setItem("auth", "token");
        console.log("Login");
    };
    const onLogOut = () => {
        localStorage.removeItem("auth");
        console.log("Log Out");
    };

    return (
        <Card>
            <Component { ...props} isAuth={isAuth} onLogOut={onLogOut} onLogin={onLogin} />
        </Card>
    );
};

export default withFunction;
