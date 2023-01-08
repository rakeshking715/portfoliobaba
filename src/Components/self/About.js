import React from 'react'
import './self.css'
const About = () => {
  return (
    <>
      <div className='about'>
        <div className="row mt-5">
          <div className="col-4">
            <div className='container fs-2 text-center fw-bolder text-warning'>
              Personal -
            </div><hr className='ms-5 me-5 mt-1' />
            <div className='text-secondary'>
              <p className='text-center mb-0 mt-2 fs-5'>"RAKESH SINGH"</p>
              <p className='text-center mb-0 fs-5'>From - Ballia</p>
              <p className='text-center fs-5'> U.P INDIA</p>
            </div>
          </div>
          <div className="col-4">
            <div className='container fs-2 text-center fw-bolder text-warning'>
              Educational -
            </div><hr className='ms-5 me-5 mt-1' />
            <div className='text-secondary'>
              <div className='text-center fs-5'>Graduate 🤗</div>
              <p className='text-center fs-5 mb-0'>Completed B.Sc in CS </p>
              <p className='text-center fs-5 mb-0'>Pursuing in MCA online degree </p>
              <p className='text-center fs-5 mb-0'>from Jain Demeed-to-be University </p>
              <p className='text-center fs-5 mb-0'>Bangalore, India</p>
            </div>
          </div><div className="col-4">
            <div className='container fs-2 text-center fw-bolder text-warning'>
              Technical skills -
            </div><hr className='ms-4 me-4 mt-1' />
            <div className='text-secondary'>
              <p className='text-center fs-5 mb-0'>HTML, CSS</p>
              <p className='text-center fs-5 mb-0'>JavaScript, React Js</p>
              <p className='text-center fs-5 mb-0'>Java, Node Js</p>
            </div>
          </div>
        </div>
        <div className='text-secondary'>
          <p className='fs-2 mt-5 text-center mb-0'>Note- I'm Fresher in Java and Node Js but I have experience in React Js more than one Year</p>
        </div>
        <div className='text-secondary float-end mt-3 me-5'>
          emai: rakeshofficial85@gmail.com <br/>
          Mob.: +91 8577876126
        </div>
      </div>
    </>
  )
}

export default About