import * as React from 'react';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Check from '@mui/icons-material/Check';
import SettingsIcon from '@mui/icons-material/Settings';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import VideoLabelIcon from '@mui/icons-material/VideoLabel';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';  // <-- Import stepConnectorClasses
import { StepIconProps } from '@mui/material/StepIcon';

interface SignupStepperProps {
  steps: string[];
  activeStep: number;
}

// Define QontoConnector
const QontoConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 10,
    left: 'calc(-50% + 16px)',
    right: 'calc(50% + 16px)',
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: '#784af4',
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: '#784af4',
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor: '#eaeaf0',
    borderTopWidth: 3,
    borderRadius: 1,
    ...theme.applyStyles('dark', {
      borderColor: theme.palette.grey[800],
    }),
  },
}));

// Define ColorlibConnector
const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 10,
    left: 'calc(-50% + 16px)',
    right: 'calc(50% + 16px)',
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: '#e64a19',
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: '#e64a19',
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor: '#f5f5f5',
    borderTopWidth: 3,
    borderRadius: 1,
    ...theme.applyStyles('dark', {
      borderColor: theme.palette.grey[700],
    }),
  },
}));


const QontoStepIconRoot = styled('div')<{ ownerState: { active?: boolean } }>`
  ${({ ownerState }) => ownerState?.active && `
    /* styles when active is true */
    background-color: blue;
  `}
`;


function QontoStepIcon(props: StepIconProps) {
  const { active, completed, className } = props;

  return (
    <QontoStepIconRoot ownerState={{ active }} className={className}>
      {completed ? (
        <Check className="QontoStepIcon-completedIcon" />
      ) : (
        <div className="QontoStepIcon-circle" />
      )}
    </QontoStepIconRoot>
  );
}

const icons: { [index: string]: React.ReactElement } = {
  1: <SettingsIcon />,
  2: <GroupAddIcon />,
  3: <VideoLabelIcon />,
};

function ColorlibStepIcon(props: StepIconProps) {
  const { active, completed, className } = props;

  return (
    <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  );
}

const ColorlibStepIconRoot = styled('div')<{ ownerState: { completed?: boolean; active?: boolean } }>(({ theme }) => ({
  backgroundColor: '#ccc',
  zIndex: 1,
  color: '#fff',
  width: 50,
  height: 50,
  display: 'flex',
  borderRadius: '50%',
  justifyContent: 'center',
  alignItems: 'center',
  ...theme.applyStyles('dark', {
    backgroundColor: theme.palette.grey[700],
  }),
  variants: [
    {
      props: ({ ownerState }) => ownerState.active,
      style: {
        backgroundImage: 'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
        boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
      },
    },
    {
      props: ({ ownerState }) => ownerState.completed,
      style: {
        backgroundImage: 'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
      },
    },
  ],
}));

const SignupStepper: React.FC<SignupStepperProps> = ({ steps, activeStep }) => {
  return (
    <Stack sx={{ width: '100%' }} spacing={4}>
      <Stepper alternativeLabel activeStep={activeStep} connector={<QontoConnector />}>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel StepIconComponent={QontoStepIcon}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Stepper alternativeLabel activeStep={activeStep} connector={<ColorlibConnector />}>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Stack>
  );
};

export default SignupStepper;
