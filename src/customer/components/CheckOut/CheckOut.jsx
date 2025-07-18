import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {useLocation,useNavigate} from 'react-router-dom'
import { OrderSummary } from './OrderSummary';
import { DeliveryAddress } from './DeliveryAddress';

const steps = ['Login', 'Deleivery Address', 'Order Summary' ,'Payment'];

export default function CheckOut() {
    
  const [activeStep, setActiveStep] = React.useState(0);
  const location=useLocation()
  const navigate = useNavigate();
  const querysearch=new URLSearchParams(location.search)
  const step=querysearch.get('step')


  React.useEffect(() => {
    if (step !== null && !isNaN(step)) {
      setActiveStep(Number(step));
    }
  }, [step]);

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
         
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}></Typography>
      
          <div className='mt-10'>
            {activeStep==2?<DeliveryAddress/>:<OrderSummary/>}
          </div>
        </React.Fragment>
      )}
    </Box>
  );
}
