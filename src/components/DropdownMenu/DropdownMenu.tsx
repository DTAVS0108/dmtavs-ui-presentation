import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

interface DropdownMenuProps {
  buttonLabel: string;
  menuOptions: { label: string; action: () => void }[];
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ buttonLabel, menuOptions }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (action: () => void) => {
    action();
    handleClose();
  };

  return (
    <div>
      <Button
        id="dropdown-button"
        aria-controls={open ? 'dropdown-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        {buttonLabel}
      </Button>
      <Menu
        id="dropdown-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'dropdown-button',
        }}
      >
        {menuOptions.map((option, index) => (
          <MenuItem key={index} onClick={() => handleMenuItemClick(option.action)}>
            {option.label}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default DropdownMenu;
