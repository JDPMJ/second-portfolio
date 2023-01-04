import React, { useContext } from "react";
import "./toggle.css";
import WbSunnyRoundedIcon from "@mui/icons-material/WbSunnyRounded";
import DarkModeRoundedIcon from "@mui/icons-material/DarkModeRounded";
import { ThemeContext } from "../../context";

const styles = {
  tIcon: {
    width: "15px",
    height: "15px"
  }
};

const Toggle = () => {
  const theme = useContext(ThemeContext);
  
  const handleClick = () => {
    theme.dispatch({ type: "TOGGLE" });
  };

  return (
    <div className="t" style={{ backgroundColor: theme.state.darkMode ? "white" : "#222222",  color: theme.state.darkMode ? "#222222" : "white"}}>
      <WbSunnyRoundedIcon sx={styles.tIcon} />
      <DarkModeRoundedIcon sx={styles.tIcon} />
      <div className="t-button" onClick={handleClick} style={{ left: theme.state.darkMode ? "0px" : "25px" }}></div>
    </div>
  );
};

export default Toggle;