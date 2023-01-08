import React from 'react'
import '../Home.css'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import Tooltip from '@mui/material/Tooltip';
import { Link } from 'react-router-dom'
import { motion } from "framer-motion"
import Resume from './Resume.pdf';

const Home = () => {
  const [text] = useTypewriter({
    words: ['A web Developer', 'A front-end Developer', 'Currently working as a react developer', ''],
    loop: 0
  })

  const transition = {
    duration: 3,
    type: "spring",
  };

  return (
    <>
      <div className=" home">
        <div className='row'>
          <div className="col-5">
            <h1 className='fs-3 homeFont text-white' style={{marginLeft:'-15rem'}}><span className='text- 
             decoration-underline text-warning'> CREAT</span>IVE</h1>
            <h1 className='ms-5 fs-3 homeFont text-white' style={{ marginTop: '-0.8rem' }}>DEV<span 
            className='text-decoration-underline text-warning'>ELOPER</span></h1>
            <motion.div className='mt-3 '
              initial={{ marginLeft: '8rem' }}
              animate={{ marginLeft: '1.1rem' }}
              transition={transition}
            >
              <video className='videoBox mt-2 ms-2' src="./image/video.mp4" height={200} width={350} loop 
               autoPlay muted controls>video</video>
            </motion.div>

          </div>
          <div className="col-1 mt-0">
            <img src="./image/don.png" className='d-inline' alt="heart" />
          </div>
          <div className="col-6">
            <div className='text-center text-white mt-5'>
              <h1 >
                Hey, I'm
              </h1>
              <h1 className='text-secondary'>'Rakesh Singh'</h1>
              <p className='mt-1 '>A focused web developer which </p>
              <p style={{ marginTop: '-1.3rem' }}> transform the ideas into real products.</p >
              <h2 className='fs-6 ms-3 text-center text-warning'>Technical Skills -</h2>
              <h2 className='fs-5 text-center'>HTML, CSS, JAVASCRIPT, REACT JS</h2>
              <h2 className='fs-5  text-center'>NODE JS and JAVA</h2>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-7">
            <div className=''>
              <h5 className='ms-3 me-5 mt-3 text-secondary'>“Any fool can write code that a computer can understand. Good programmers write code that humans can understand.” - Martin Fowler</h5>
              <Link to={Resume} target='_blank' download='cv.pdf' style={{marginLeft:'17rem'}}> <button className="btn-warning btn-sm fw-bold mt-3 ms-5 " >Download Resume</button></Link>
            </div>
          </div>
          <div className="col-5">
            <motion.div
              initial={{ marginRight: '8rem' }}
              animate={{ marginRight: '2rem' }}
              transition={transition}
              className='float-end mt-3 d-inline'
            >
              <h2 className='text-center text-white typewriter'>I'm
                <p className='mt-1'>{text}<Cursor /></p>
              </h2>
            </motion.div>
          </div>
        </div>


      </div>
    </>
  )
}

export default Home