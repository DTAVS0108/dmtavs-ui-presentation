import React from "react";
import { Tooltip } from '@mui/material';

interface TooltipProps {
  title: string;
  children: React.ReactNode;
  placement?: "top" | "bottom" | "left" | "right";
}

interface CustomMapDataTooltipProps {
  title: React.ReactNode;
  children: React.ReactNode;
  placement?: "top" | "bottom" | "left" | "right";
}

export const CustomTooltipWithLink: React.FC<TooltipProps> = ({
  title,
  children,
  placement = "top",
}) => {
  return (
    <Tooltip
      title={
        <a
          href={title}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "blue",
            textDecoration: "underline",
            cursor: "pointer",
          }}
        >
          {title}
        </a>
      }
      placement={placement}
      arrow
      componentsProps={{
        tooltip: {
          sx: {
            backgroundColor: "white",
            color: "black",
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)",
            border: "1px solid rgba(0, 0, 0, 0.12)",
            fontSize: "0.7rem",
          },
        },
        arrow: {
          sx: {
            color: "white",
          },
        },
      }}
    >
      <a
        href={title}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          color: "blue",
          textDecoration: "underline",
          cursor: "pointer",
        }}
      >
        {children}
      </a>
    </Tooltip>
  );
};

const CustomTooltip: React.FC<TooltipProps> = ({
  title,
  children,
  placement = "top",
}) => {
  return (
    <Tooltip
      title={title}
      placement={placement}
      arrow
      componentsProps={{
        tooltip: {
          sx: {
            backgroundColor: "white",
            color: "black",
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)",
            border: "1px solid rgba(0, 0, 0, 0.12)",
            fontSize: "0.7rem",
          },
        },
        arrow: {
          sx: {
            color: "white",
          },
        },
      }}
    >
      <span>{children}</span>
    </Tooltip>
  );
};

export default CustomTooltip;


export const CustomMapDataTooltip: React.FC<CustomMapDataTooltipProps> = ({
  title,
  children,
  placement = "top",
}) => {
  return (
    <Tooltip
      title={title}
      placement={placement}
      arrow
      componentsProps={{
        tooltip: {
          sx: {
            backgroundColor: "white",
            color: "black",
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)",
            border: "1px solid rgba(0, 0, 0, 0.12)",
            fontSize: "0.7rem",
          },
        },
        arrow: {
          sx: {
            color: "white",
          },
        },
      }}
    >
      <span>{children}</span>
    </Tooltip>
  );
};
