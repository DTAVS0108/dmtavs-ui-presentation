import { useEffect, CSSProperties } from "react";
import CustomTooltip from "./Tooltip";

export const CustomSnackBar = ({
  message,
  type,
  duration,
  onCloseToast,
  alertPositionTop,
  alertPositionLeft
}: {
  message: string;
  type?: "success" | "error" | "warn" | "info" | "normal";
  duration?: number;
  onCloseToast: () => void;
  alertPositionTop?: string | null;
  alertPositionLeft?: string | null;
}) => {
  useEffect(() => {
    const timer = setTimeout(onCloseToast, duration);
    return () => clearTimeout(timer);
  }, [duration, onCloseToast]);

  const getBackgroundColor = (type) => {
    switch (type) {
      case "success":
        return "#4caf50"; // Green
      case "error":
        return "#f44336"; // Red
      case "warn":
        return "#ff9800"; // Orange
      case "normal":
        return "#ffffff"; // White background
      default:
        return "#2196f3"; // Default blue color
    }
  };

  const snackBarStyles: CSSProperties = {
    position: "fixed" as const,
    top: alertPositionTop ? alertPositionTop : '80px',
    left: alertPositionLeft ? alertPositionLeft : "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: getBackgroundColor(type),
    color: "black",
    padding: "10px 20px",
    borderRadius: "5px",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
    zIndex: 2001,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    minWidth: "200px",
    maxWidth: "700px",
    minHeight: "50px",
    maxHeight: "500px",
    overflowY: "auto",
    overflowX: "hidden",
};


  const closeButtonStyles: CSSProperties = {
    position: "absolute",
    top: "5px",
    right: "10px", 
    background: "none",
    border: "none",
    color: "#000000",
    fontSize: "24px",
    cursor: "pointer",
  };

  return (
    <div style={snackBarStyles}>
      <span className="pr-2">{message}.</span>
      <CustomTooltip title={"Close"}>
        <button style={closeButtonStyles} onClick={onCloseToast}>
          &times;
        </button>
      </CustomTooltip>
    </div>
  );
};
