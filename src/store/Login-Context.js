import { createContext, useState } from "react";


export const LoginContext = createContext(
    {
        isLogged: localStorage.getItem("logged") === "1" ? true : false,
        seConnecter: () => { },
        seDeconnecter: () => { }
    }
)

function LoginContextProvider(props) {
    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("logged") === "1" ? true : false);

    function seConnecter(email, pwd) {
        if (email === "kalthoum" && pwd === "123") {
            localStorage.setItem('logged', '1');

            setIsLoggedIn(true);
            console.log(isLoggedIn);
            return true;
        }
        else {
            localStorage.setItem('logged', '0');
            setIsLoggedIn(false);
            return false;
        }

    }

    function seDeconnecter() {
        localStorage.setItem('logged', '0');
        setIsLoggedIn(false);
    }


    const context = {
        isLogged: isLoggedIn,
        seConnecter: seConnecter,
        seDeconnecter: seDeconnecter
    }
    return (
        <LoginContext.Provider value={context}>
            {props.children}
        </LoginContext.Provider>
    )
}

export default LoginContextProvider;