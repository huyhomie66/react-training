import { FC } from "react";
import Layout from "src/components/Layout";

const Home: FC = () => {
  const desktopComponent = <div>desktop</div>;

  const tabletComponent = <div>tablet</div>;

  const mobileComponent = <div>mobile</div>;

  const props = {
    desktopComponent,
    tabletComponent,
    mobileComponent
  };
  return <Layout {...props} />;
};

export default Home;
