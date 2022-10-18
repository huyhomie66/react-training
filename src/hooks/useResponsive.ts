import { useTheme } from "@mui/material";
import { useMediaQuery } from "@mui/material";

const useResponsive = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isTablet = useMediaQuery(theme.breakpoints.between("md", "lg"));
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));

  return { isMobile, isTablet, isDesktop };
};

export default useResponsive;
