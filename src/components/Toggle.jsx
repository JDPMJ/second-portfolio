import { useContext } from 'react';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import WbSunnyRoundedIcon from "@mui/icons-material/WbSunnyRounded";
import DarkModeRoundedIcon from "@mui/icons-material/DarkModeRounded";

function Toggle({ ColorModeContext }) {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  
  return (
    <Box
      sx={{
        borderRadius: "20px",
        position: "fixed",
        top: "10px",
        right: "10px",
        zIndex: "999",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around"
      }}
    >
      <IconButton onClick={colorMode.toggleColorMode} color="inherit">
        {theme.palette.mode === 'dark' ? <WbSunnyRoundedIcon /> : <DarkModeRoundedIcon />}
      </IconButton>
    </Box>
  );
}

export default Toggle;