import React from 'react';
import TextField from '@mui/material/TextField';

interface StyledTextFieldProps {
  label?: string;
  name: string;
  value: string;
  textType?: string;
  error?: boolean;
  className?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  multiline?: boolean;
  rows?: number;
  helperText?: string;
  placeholder?: string;
  fullWidth?: boolean;
}

const StyledTextField: React.FC<StyledTextFieldProps> = ({
  label,
  name,
  textType = 'text',
  value,
  onChange,
  className = '',
  error = false,
  multiline = false,
  rows = 1,
  helperText = '',
  placeholder = '',
  fullWidth = true,
}) => (
  <TextField
    fullWidth={fullWidth}
    label={label}
    type={textType}
    name={name}
    value={value}
    placeholder={placeholder}
    onChange={onChange}
    variant="outlined"
    className={`${className} ${error ? 'input-error' : ''}`}
    margin="normal"
    multiline={multiline}
    rows={rows}
    helperText={helperText}
    sx={{
      marginTop: 0,
      marginBottom: 0,
      outline: 'none',
      width: '99%',
      boxShadow: 'none',
      '& .MuiInputBase-root': {
        height: '30px',
        padding: '0px !important',
      },
      '& .MuiInputBase-input': {
        padding: '10px',
        fontSize: '0.9rem',
      },
      '& .MuiFormHelperText-root': {
        display: 'flex',
        alignItems: 'center',
        position: 'absolute',
        bottom: '-10px',
        left: 0,
        transform: 'translateY(50%)',
      },
      '& .MuiInputLabel-root': {
        transform: !value ? 'translate(14px,10px) scale(1)' : '',
        fontSize: '0.9rem',
        transition: 'all 0.3s ease',
        backgroundColor: 'transparent',
        zIndex: 1,
      },
      '& .MuiInputLabel-root.Mui-focused': {
        transform: 'translate(14px, -8px) scale(1)',
        color: 'primary.main',
        fontSize: '0.8rem',
      },
      '& input[type=date]::-webkit-datetime-edit-text': {
        '-webkit-appearance': !value ? 'none' : '',
        display: !value ? 'none' : '',
      },
      '& input[type=date]::-webkit-datetime-edit-month-field': {
        '-webkit-appearance': !value ? 'none' : '',
        display: !value ? 'none' : '',
      },
      '& input[type=date]::-webkit-datetime-edit-day-field': {
        '-webkit-appearance': !value ? 'none' : '',
        display: !value ? 'none' : '',
      },
      '& input[type=date]::-webkit-datetime-edit-year-field': {
        '-webkit-appearance': !value ? 'none' : '',
        display: !value ? 'none' : '',
      },
    }}
  />
);

export default StyledTextField;
