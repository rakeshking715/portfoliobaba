import React from 'react'

const ForeCast = ({ title }) => {
    return (
        <>
            <div className="ms-5 mt-1 fw-bold text-white">
                <p>{title}</p>
                <hr className='me-5' />

            </div>
            <div className="d-flex flex-row justify-content-center text-sm ms-5 me-5 text-white">
                <div>
                    <p>04:30 PM</p>
                    <img src="./Image/1.png" alt="img" style={{ height: '40px', width: '40px' }} />
                </div>
                <div className="ms-5 text-white">
                    <p>04:30 PM</p>
                    <img src="./Image/1.png" alt="img" style={{ height: '40px', width: '40px' }} />
                </div>
                <div className="ms-5 text-white">
                    <p>04:30 PM</p>
                    <img src="./Image/1.png" alt="img" style={{ height: '40px', width: '40px' }} />
                </div> <div className="ms-5 text-white">
                    <p>04:30 PM</p>
                    <img src="./Image/1.png" alt="img" style={{ height: '40px', width: '40px' }} />
                </div>
                <div className="ms-5 text-white">
                    <p>04:30 PM</p>
                    <img src="./Image/1.png" alt="img" style={{ height: '40px', width: '40px' }} />
                </div>
                <div className="ms-5 text-white">
                    <p>04:30 PM</p>
                    <img src="./Image/1.png" alt="img" style={{ height: '40px', width: '40px' }} />
                </div>
                <div className="ms-5 text-white">
                    <p>04:30 PM</p>
                    <img src="./Image/1.png" alt="img" style={{ height: '40px', width: '40px' }} />
                </div>
                <div className="ms-5 text-white">
                    <p>04:30 PM</p>
                    <img src="./Image/1.png" alt="img" style={{ height: '40px', width: '40px' }} />
                </div>
                <div className="ms-5 text-white">
                    <p>04:30 PM</p>
                    <img src="./Image/1.png" alt="img" style={{ height: '40px', width: '40px' }} />
                </div>
                <div className="ms-5 text-white">
                    <p>04:30 PM</p>
                    <img src="./Image/1.png" alt="img" style={{ height: '40px', width: '40px' }} />
                </div>
            </div>
        </>
    )
}

export default ForeCast