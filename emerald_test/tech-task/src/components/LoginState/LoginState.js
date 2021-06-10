import React from "react";

const LoginState = (props) => {
    // This isn't ideal, @todo convert Session into a react component so it can trigger state changes
    const [isLoggedIn, setLoginState] = React.useState(props.isLoggedIn());
    const whichOnClick = () => {
        isLoggedIn ? props.toLogout(setLoginState) : props.toLogin(setLoginState);
    }

    const stateDescription = () => {       
        return isLoggedIn ? 
            "You are logged in" : 
            "No Login found"
        ;
    };

    return (
        <div id='loginState' style={{ 
            position:'fixed', 
            width:'20vw',
            height:'18pt',
            fontSize:'8pt',
            display:'flex',
            alignItems:'center',
            background:'rebeccaPurple',
            minWidth:'275px',
            color:'#DDD'
         }}>
            <button 
                onClick={whichOnClick} 
            >
                {isLoggedIn ? "Logout" : "Login"}
            </button> 
            <p style={{
                marginLeft:'5px'
            }}>{stateDescription()}</p>
        </div>
    );
};

export default LoginState;