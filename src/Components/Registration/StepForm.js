import React, { useContext } from 'react'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import Personal from './Personal'
import Document from './Document'
import Account from './Account'
import { multiStepContext } from './StepContext';
import Users from './Users'



const StepForm = () => {
  const { currentStep, finalData } = useContext(multiStepContext);
  const handleSteps = (step) => {
    switch (step) {
      case 1:
        return <Personal />
      case 2:
        return <Document />
      case 3:
        return <Account />
      default:
        throw new Error('Unknown step')
    }
  }

  return (
    <>
      <Stepper className='pt-4 mt-2 me-5 ms-5' activeStep={currentStep - 1}>
        <Step>
          <StepLabel></StepLabel>
        </Step>
        <Step>
          <StepLabel></StepLabel>
        </Step><Step>
          <StepLabel></StepLabel>
        </Step>
      </Stepper>
      {handleSteps(currentStep)}
      <br />
      {finalData.length > 0 ? <Users /> : ''}
    </>
  )
}

export default StepForm