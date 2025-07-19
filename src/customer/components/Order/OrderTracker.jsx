import { Stepper,Step,StepLabel } from "@mui/material"

export const OrderTracker=({activeStep,steps})=>{
    return(
        <div className="w-full">
            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label)=>(
                    <Step key={label}>
                        <StepLabel sx={{color:"blue" ,fontSize:"45px"}}>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
        </div>
    )
}