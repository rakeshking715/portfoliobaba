import React from 'react'
import Button from '@mui/material/Button';
import { useContext } from 'react';
import { multiStepContext } from './StepContext';

const Account = () => {
  const { setCurrentStep, userData, setUserData, submitData } = useContext(multiStepContext);

  return (
    <>
      <div className=" mt-1 ms-5 mt-2">

        <div className="input-group mb-3 mt-3">
          <input type="text" 
          className="form-control shadow-none" 
          placeholder="Account Holder Name" 
          aria-label="Username" 
          aria-describedby="basic-addon1" />
        </div>
        <div className="input-group mb-3 mt-3">
          <input type="text" className="form-control shadow-none" placeholder="Father's Name" aria-
            label="Username" />
          <input type="text" className="form-control shadow-none" placeholder="Mother's Name" aria-
            label="Server" />
        </div>
        <div className="input-group mb-3 mt-3">
          <input type="email" className="form-control shadow-none" placeholder="Account Holder e-mail"
            aria-label="Recipient's username" aria-describedby="basic-addon2" />
        </div>
        <div className="input-group mb-3 mt-3">
          <input type="text" className="form-control shadow-none" placeholder="Address - House No.,Vill., 
           Dist. , Pin, State" aria-label="Username" aria-describedby="basic-addon1" />
        </div>
        <div className='form-group row '>
          <div className='col-xs-2'>
            <select className="form-select mb-3 shadow-none" aria-label="Default select example">
              <option selected>Account Type</option>
              <option value={1}>Saving</option>
              <option value={2}>Current</option>
            </select>
            <select className="form-select shadow-none" aria-label="Default select example">
              <option selected>Account</option>
              <option value={1}>Single</option>
              <option value={2}>Joint</option>
              <option value={3}>Three</option>
            </select>
          </div>

        </div>

        <div className="input-group mt-3">
          <span className="input-group-text">With textarea</span>
          <textarea className="form-control shadow-none" aria-label="With textarea" defaultValue={""} />
        </div>
        <div>
          <Button className='mt-4 ms-5' size='small' variant="contained"
            onClick={() => setCurrentStep(2)}>
            Back
          </Button>
          <Button className='ms-5 mt-4' size='small' variant='contained'
            onClick={submitData}
          >Submit</Button>
        </div>

      </div>

    </>
  )
}

export default Account