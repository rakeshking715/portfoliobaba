import React from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <>
      <div className='row'>
        <div className='col-6 cards'>
          <div className='fw-bold fs-3 mt-3 text-center text-warning'>
            Let's talk
          </div><hr />
          <form>
            <label className='mt-2 ms-4' htmlFor="name">Your name</label>
            <div className='mt-2 ms-4'><input className='ConIn' type="text" placeholder='full Name' /></div>
            <label className='ms-4 mt-3' htmlFor="name">Your Email</label>
            <div className='mt-2 ms-4'><input className='ConIn' type="email" placeholder='email' /></div>
            <label className='ms-4 mt-3' htmlFor="name">Your message here...</label>
            <div className='mt-2 ms-4'><textarea rows='3' cols='35'></textarea></div>
            <div className='mt-1 ms-5'><input type="checkbox" />
              <label className='mt-3 ms-3' htmlFor="Agree">I agree with T&C</label>
              <Link to='/' className='btn btn-primary ms-5'>Send</Link></div>
          </form>
        </div>
        <div className="col-6 ms-5 mt-5 text-center text-white">
          <hr/>
          <div className='fs-1 mt-2'>I'm happy to get in touch with you.</div>
          <div className='fs-1'>Feel free and text me, I will reply you as soon as possible.</div><hr />

        </div>
      </div>
    </>
  )
}

export default Contact