import React from 'react';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

interface StyledSelectProps {
  placeholder: string;
  name: string;
  value: string;
  options: string[];
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  fullWidth?: boolean;
  helperText?: string;
  error?: boolean;
  disabled?: boolean;
  variant?: 'filled' | 'outlined' | 'standard';
  margin?: 'none' | 'dense' | 'normal';
}

const StyledSelect: React.FC<StyledSelectProps> = ({
  placeholder,
  name,
  value,
  options,
  onChange,
  fullWidth = true,
  helperText = '',
  error = false,
  disabled = false,
  variant = 'outlined',
  margin = 'normal',
}) => (
  <TextField
    select
    fullWidth={fullWidth}
    name={name}
    value={value}
    onChange={onChange}
    variant={variant}
    margin={margin}
    error={error}
    helperText={helperText}
    disabled={disabled}
    autoComplete="off"
    sx={{
      marginTop: 0,
      marginBottom: 1,
      width: '99%',
      '& .MuiInputBase-root': {
        height: '30px',
        fontSize: '0.9rem',
      },
      '& .MuiInputBase-input': {
        padding: '5px',
        fontSize: '0.9rem',
      },
      '& .MuiFormHelperText-root': {
        display: 'flex',
        alignItems: 'center',
        position: 'absolute',
        bottom: '-20px',
        left: 0,
        transform: 'translateY(50%)',
      },
      '& .MuiInputLabel-root': {
        transform: !value ? 'translate(14px,10px) scale(1)' : '',
        fontSize: '0.9rem',
        transition: 'all 0.3s ease',
      },
      '& .MuiInputLabel-root.Mui-focused': {
        transform: 'translate(14px, -8px) scale(1)',
        color: 'primary.main',
        fontSize: '0.8rem',
      },
    }}
    SelectProps={{
      displayEmpty: true,
    }}
    inputProps={{
      'aria-label': placeholder,
    }}
  >
    <MenuItem value="" disabled>
      {placeholder}
    </MenuItem>
    {options.map((option, index) => (
      <MenuItem key={index} value={option} sx={{ fontSize: '0.9rem' }}>
        {option}
      </MenuItem>
    ))}
  </TextField>
);

export default StyledSelect;
