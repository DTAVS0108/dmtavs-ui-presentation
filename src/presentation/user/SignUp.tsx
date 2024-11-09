import React, { useState } from 'react';
import SignupStepper from '../../components/SignupStepper';

const steps = ['Account Setup', 'Profile Details', 'Confirmation'];

const SignUp = () => {
  const [activeStep, setActiveStep] = useState(0);

  return <SignupStepper steps={steps} activeStep={activeStep} />;
};

export default SignUp;
