import React from 'react'
import StepForm from './StepForm';
import { useState } from 'react';

export const multiStepContext = React.createContext();
const StepContext = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [userData, setUserData] = useState([]);
  const [finalData, setFinalData] = useState([]);

  const submitData = () => {
    setFinalData(finalData => [...finalData, userData]);
    setUserData('');
    setCurrentStep(1);
  }
  return (
    <>
      <multiStepContext.Provider value={{ currentStep, setCurrentStep, userData, setUserData, finalData, 
         setFinalData, submitData }}>
        <StepForm />
      </multiStepContext.Provider>
    </>
  )
}

export default StepContext