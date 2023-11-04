import React from 'react'
import { useNavigate } from 'react-router-dom';

export const LogIn = () => {

    const navegar = useNavigate();
    const logIn = () => {


        event.preventDefault();
        console.log("He dado clik al boton de Sign In")

    }

    const signIn = () => {
        event.preventDefault();
        navegar('/signIn');
    }
    return (
        <>
            <div className='container mt-5'>

                <h1>Inicio de Sesion</h1>
                <form>
                    <div className="form-floating mb-3">

                        <input className='form-control' />
                        <label>Email</label>
                    </div>

                    <div className="form-floating mb-3">

                        <input type='password' className='form-control' />
                        <label>PassWord</label>
                    </div>

                    <button className='btn btn-secondary w-100 mb-3' onClick={logIn} >Log In</button>
                    <button className='btn btn-secondary w-100 ' onClick={signIn} >Sign In</button>

                </form>
            </div>
        </>
    )
}


