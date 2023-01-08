import React from 'react'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'


const LogIn = () => {
    return (
        <>
            <div className="row">
                <div className="col-7 text-white">
                    <div className='text-center mt-5'>
                        <h1>NEVER SHARE YOUR</h1>
                        <h1>PASSWORD</h1>
                    </div>
                </div>
                <div className="col-5">
                    <form className='registrationContainer mt-5 ms-3'>
                        <h1 className='text-primary text-center mt-3'>Admin Panel</h1><hr />
                        <div className="mb-3 mt-3 ms-3 me-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email
                                address</label>
                            <input type="email" className="form-control shadow-none"
                                id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3 ms-3 me-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control shadow-none"
                                id="exampleInputPassword1" />
                        </div>
                        <div className="mb-3 form-check ms-5 me-3 ">
                            <input type="checkbox" className="form-check-input shadow-none"
                                id="exampleCheck1" />
                            <label className="form-check-label ms-1" htmlFor="exampleCheck1">
                                Agree with <a href="">Terms & Condition</a> </label>
                        </div>

                        <Button className='ms-4 d-inline mt-3' variant="contained">
                            Submit
                        </Button>
                        <Link className='d-inline text-decoration-none' to='/index'><Button className='ms-3 
                         mt-3' size='small'>
                            Open new Account
                        </Button></Link>
                    </form>
                </div>
            </div>


        </>
    )
}

export default LogIn