import React from 'react'

export const LogIn = () => {
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

                    <button type='subtmit' className='btn btn-secondary w-100 mb-3'>Log In</button>
                    <button className='btn btn-secondary w-100 '>Sign In</button>

                </form>
            </div>
        </>
    )
}


