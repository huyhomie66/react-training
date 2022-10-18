import { Container } from "@mui/system";
import { FC, ReactNode } from "react";
import Header from "src/components/Header";
import useResponsive from "src/hooks/useResponsive";

interface Props {
  desktopComponent: ReactNode;
  tabletComponent: ReactNode;
  mobileComponent: ReactNode;
}

const Layout: FC<Props> = ({
  desktopComponent,
  tabletComponent,
  mobileComponent
}) => {
  const { isDesktop, isMobile, isTablet } = useResponsive();

  return (
    <Container fixed>
      <Header />
      {isMobile && mobileComponent}
      {isDesktop && desktopComponent}
      {isTablet && tabletComponent}
    </Container>
  );
};

export default Layout;
