import React, { useContext, useRef, useState } from 'react'
import { LoginContext } from '../store/Login-Context';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const refLogin = useRef();
    const refPwd = useRef();
    const LogCtx = useContext(LoginContext);
    const navigate = useNavigate();
    const [error, seterror] = useState(false)
    
    function submitHandler(event) {
        event.preventDefault();
        console.log(refLogin.current.value, refPwd.current.value);
        let logValue = LogCtx.seConnecter(refLogin.current.value, refPwd.current.value);
        if (logValue)
            navigate('/candidats');
        else seterror(true)
    }
    return (
        <div>
            <div className="container mt-5">
                <div className="row justify-content-md-center">
                    <div className="col-md-4">
                        <div className="row justify-content-md-center">
                            <div className="col-md-4">
                                {error && <div className="alert alert-danger">
                                    <strong>login ou mot de passe erronés..</strong>
                                </div>}

                                <form onSubmit={submitHandler}>
                                    <div className="form-group">
                                        <label>Nom Utilisateur :</label>
                                        <input type="text" name="username" className="form-control" ref={refLogin} />
                                    </div>
                                    <div className="form-group">
                                        <label>Mot de passe :</label>
                                        <input type="password" name="password" ref={refPwd} className="form-control" />
                                    </div>
                                    <br />
                                    <div className="row justify-content-md-center">
                                        <button type="submit" className="btn btn-success">Connexion</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div></div>

    )
}
