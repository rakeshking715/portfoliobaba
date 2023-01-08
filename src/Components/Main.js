import React from 'react'
import Home from './Home'
import LogIn from './LogIn'
import Index from './Registration/Index'

const Main = () => {
    return (
        <>
            <div >
                <div className="row">
                    <div className="col-8">
                        <Index />
                    </div>
                    <div className="col-4">
                        <LogIn />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Main