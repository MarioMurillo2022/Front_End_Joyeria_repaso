import React from 'react'

export const SignIn = () => {
    return (
        <>
            <div className='container mt-5'>

                <h1>Sign In</h1>
                <form>
                    <div className="form-floating mb-3">
                        <input className='form-control' />
                        <label>Email</label>
                    </div>

                    <div className="form-floating mb-3">
                        <input className='form-control' />
                        <label>First Name</label>
                    </div>

                    <div className="form-floating mb-3">
                        <input className='form-control' />
                        <label>Last Name</label>
                    </div>


                    <div className="form-floating mb-3">
                        <input type='password' className='form-control' />
                        <label>PassWord</label>
                    </div>

                    <div className="form-floating mb-3">
                        <input type='password' className='form-control' />
                        <label>Confirm PassWord</label>
                    </div>

                    <button type='subtmit' className='btn btn-secondary w-100 mb-3'>Sign In</button>

                </form>
            </div>
        </>
    )
}
