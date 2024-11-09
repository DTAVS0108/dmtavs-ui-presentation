import React, { useState, useRef, useEffect } from 'react';
import {
  TextField,
  MenuItem,
  InputAdornment,
  IconButton,
  FormControl,
  Popper,
  Paper,
  MenuList,
  ClickAwayListener
} from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

interface EditableDropdownProps {
  options: string[];
  value: string;
  onChange: (value: string) => void;
}

const EditableDropdown: React.FC<EditableDropdownProps> = ({ options, value, onChange }) => {
  const [inputValue, setInputValue] = useState(value || "");
  const [dropdown, setDropdown] = useState(false);
  const anchorRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    onChange(event.target.value);
    setDropdown(false);
  };

  const handleSelectChange = (option: string) => {
    setDropdown(false);
    setInputValue(option);
    onChange(option);
  };

  const handleDropdownIconClick = () => {
    setDropdown((prevOpen) => !prevOpen);
  };

  const handleClose = (event: MouseEvent | TouchEvent) => {
    if (anchorRef.current && anchorRef.current.contains(event.target as Node)) {
      return;
    }
    setDropdown(false);
  };

  return (
    <FormControl fullWidth>
      <TextField
        value={inputValue}
        onChange={handleInputChange}
        inputRef={anchorRef}
        variant="outlined"
        sx={{
          marginTop: 0,
          marginBottom: 1,
          width: "99%",
          "& .MuiInputBase-root": {
            height: "30px",
            fontSize: "0.9rem",
          },
          "& .MuiInputBase-input": {
            padding: "5px",
            fontSize: "0.9rem",
          },
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={handleDropdownIconClick}>
                {dropdown ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <Popper
        open={dropdown}
        anchorEl={anchorRef.current}
        placement="bottom-start"
        disablePortal
        style={{ zIndex: 1300, width: anchorRef.current ? anchorRef.current.clientWidth : undefined }}
      >
        <Paper>
          <ClickAwayListener onClickAway={handleClose}>
            <MenuList>
              {options.map((option, index) => (
                <MenuItem key={index} onClick={() => handleSelectChange(option)} sx={{ fontSize: "0.9rem" }}>
                  {option}
                </MenuItem>
              ))}
            </MenuList>
          </ClickAwayListener>
        </Paper>
      </Popper>
    </FormControl>
  );
};

export default EditableDropdown;
